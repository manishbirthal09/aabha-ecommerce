import Order from "../models/Order.js";
import { getShippingCharge } from "../utils/delhivery.js";
import Product from "../models/Product.js";
// import Settings from "../models/Settings.js";
import Coupon from "../models/Coupon.js";
// import { calculateBogoDiscount } from "../utils/calculateBogo.js";
import { getApplicableGift } from "../utils/giftLogic.js";


export const createOrder = async (req, res) => {
  try {
    const { items, customer, paymentMethod, couponCode } = req.body;

    
    const populatedItems = await Promise.all(
      items.map(async (item) => {
        const product = await Product.findById(item.product);
        if (product.stock < item.quantity) {
          throw new Error(`Insufficient stock for ${product.name}. Only ${product.stock} left.`);
        }
        if (!product) throw new Error(`Product not found: ${item.product}`);
        return { product, quantity: item.quantity };
      })
    );

    
    const subtotal = populatedItems.reduce((sum, item) => {
      const price = item.product.discountPrice || item.product.price;
      return sum + price * item.quantity;
    }, 0);

    
    // const settings = (await Settings.findOne()) || { deliveryCharge: 99, bogoEnabled: true };
    // const bogoDiscount = calculateBogoDiscount(populatedItems, settings.bogoEnabled);
    // const afterBogo = subtotal - bogoDiscount;

    
    let couponDiscountPercent = 0;
    if (couponCode) {
      const coupon = await Coupon.findOne({ code: couponCode.toUpperCase(), active: true });
      if (coupon) couponDiscountPercent = coupon.discountPercent;
    }
    const couponDiscount = (subtotal * couponDiscountPercent) / 100;

    
    // const deliveryCharge = settings.deliveryCharge;
    // const totalAmount = Math.round(afterBogo - couponDiscount + deliveryCharge);
    const totalAmount = Math.round(subtotal - couponDiscount);
const orderItems = populatedItems.map((item) => ({
      product: item.product._id,
      name: item.product.name,
      quantity: item.quantity,
      price: item.product.discountPrice || item.product.price,
    }));
    const freeGift = getApplicableGift(subtotal);
    if (freeGift) {
      orderItems.push({
        product: null,
        name: freeGift.name,
        quantity: freeGift.quantity,
        price: 0,
        isFreeGift: true,
      });
    }
    const order = await Order.create({
      customerRef: req.customer.id,
      items: orderItems,
      subtotal,
      
      couponDiscount,
      couponCode: couponCode || null,
      
      totalAmount,
      customer,
      paymentMethod,
    });
 await Promise.all(
      populatedItems.map(async (item) => {
        await Product.findByIdAndUpdate(item.product._id, {
          $inc: { stock: -item.quantity }
        });
      })
    );
    res.status(201).json(order);
   
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};




export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ customerRef: req.customer.id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const estimateDeliveryCharge = async (req, res) => {
  try {
    const { pincode, cartItems } = req.body;

    const totalWeight = cartItems.reduce((sum, item) => {
      return sum + (item.product.weight || 200) * item.quantity;
    }, 0);

    const chargeData = await getShippingCharge(pincode, totalWeight);
    const charge = chargeData[0]?.total_amount || 60;

    res.json({ deliveryCharge: Math.round(charge) });
  } catch (err) {
    console.error("Delivery charge estimation failed:", err.message);
    res.json({ deliveryCharge: 60 });
  }
};