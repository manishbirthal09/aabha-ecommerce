import crypto from "crypto";
import razorpayInstance from "../utils/razorpay.js";
import Order from "../models/Order.js"; 
export const createRazorpayOrder = async (req, res) => {
  try {
    const { amount, orderId } = req.body;
    
    const options = {
      amount: amount * 100,     
      currency: "INR",
      receipt: `receipt_${orderId}`, 
      payment_capture: 1,        
    };

    const razorpayOrder = await razorpayInstance.orders.create(options);

    
    await Order.findByIdAndUpdate(orderId, {
      razorpay_order_id: razorpayOrder.id,
      paymentStatus: "created",
    });

      res.status(200).json({
      success: true,
      order_id: razorpayOrder.id,
      amount: razorpayOrder.amount,
      currency: razorpayOrder.currency,
      key_id: process.env.RAZORPAY_KEY_ID, 
    });
  } catch (error) {
    console.error("Razorpay order creation failed:", error);
    res.status(500).json({ success: false, message: "Could not create order" });
  }
};


export const verifyRazorpayPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      orderId, 
    } = req.body;

        const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    const isSignatureValid = generatedSignature === razorpay_signature;

    if (!isSignatureValid) {
      await Order.findByIdAndUpdate(orderId, { paymentStatus: "failed" });
      return res.status(400).json({ success: false, message: "Invalid signature — payment not trusted" });
    }

   
    await Order.findByIdAndUpdate(orderId, {
      razorpay_payment_id,
      razorpay_signature,
      paymentStatus: "paid",
    });

    res.status(200).json({ success: true, message: "Payment verified successfully" });
  } catch (error) {
    console.error("Payment verification failed:", error);
    res.status(500).json({ success: false, message: "Verification error" });
  }
};


