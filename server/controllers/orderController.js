import Order from "../models/Order.js";
import { sendOrderNotification }  from "../utils/emailNotifier.js";  
import Product from "../models/Product.js";

export const createOrder = async (req, res) => {
  try {
    const { items, totalAmount, customer, paymentMethod } = req.body;
     for (const item of items) {
      const product = await Product.findById(item.product);
      if (!product) {
        return res.status(404).json({ message: `Product not found: ${item.name}` });
      }
      if (product.stock < item.quantity) {
        return res.status(400).json({
          message: `${product.name} is out of stock (only ${product.stock} left)`,
        });
      }
    }
    const order = await Order.create({customerRef: req.customer.id, items, totalAmount, customer, paymentMethod });
    for (const item of items) {
      await Product.findByIdAndUpdate(item.product, {
        $inc: { stock: -item.quantity },
      });
    }
    res.status(201).json(order);
    sendOrderNotification(order);
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