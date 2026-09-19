import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const DELHIVERY_BASE_URL = "https://track.delhivery.com";

const testCreateOrder = async () => {
  const payload = {
    shipments: [
      {
       name: "Rohit Sharma", // real jaisa naam
      add: "123, MG Road, Connaught Place", // real jaisa address
      pin: "110001",
      city: "New Delhi",
      state: "Delhi",
      country: "India",
      phone: "8053067573", // real-pattern wala number (fake ho sakta hai lekin sequential/repetitive na ho)
      order: "ORD" + Date.now(),
      payment_mode: "Prepaid",
      products_desc: "Handcrafted Soy Wax Candle - Lavender",
      cod_amount: 0,
      total_amount: 347,
      quantity: 1,
      },
    ],
    pickup_location: {
      name: process.env.DELHIVERY_PICKUP_NAME,
      add: process.env.DELHIVERY_PICKUP_ADDRESS,
      city: process.env.DELHIVERY_PICKUP_CITY,
      pin: process.env.DELHIVERY_PICKUP_PIN,
      phone: process.env.DELHIVERY_PICKUP_PHONE,
    },
  };

  try {
    const res = await axios.post(
      `${DELHIVERY_BASE_URL}/api/cmu/create.json`,
      `format=json&data=${JSON.stringify(payload)}`,
      {
        headers: {
          Authorization: `Token ${process.env.DELHIVERY_API_TOKEN}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log("Success:", JSON.stringify(res.data, null, 2));
  } catch (err) {
    console.error("Error:", err.response?.data || err.message);
  }
};

testCreateOrder();