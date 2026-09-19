// controllers/shippingController.js
import { createShipment, trackShipment } from "../utils/delhivery.js";
import Order from "../models/Order.js";

export const shipOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findById(orderId);

    const shipmentData = {
      customerName: order.customer.name,
      address: order.customer.address,
      pincode: order.customer.pincode,
      city: order.customer.city,
      state: order.customer.state,
      phone: order.customer.phone,
      orderId: order._id.toString(),
      paymentMode: order.paymentMethod === "COD" ? "COD" : "Prepaid",
      productDesc: "Candles/Gift items",
      amount: order.totalAmount,
      quantity: order.items.length,
    };

    const result = await createShipment(shipmentData);

    await Order.findByIdAndUpdate(orderId, {
      waybill: result.packages?.[0]?.waybill,
      shippingStatus: "shipped",
    });

    res.json({ success: true, waybill: result.packages?.[0]?.waybill });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const getTrackingStatus = async (req, res) => {
  try {
    const { waybill } = req.params;
    const data = await trackShipment(waybill);
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};