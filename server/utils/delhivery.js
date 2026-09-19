import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const DELHIVERY_BASE_URL = "https://track.delhivery.com";
const DELHIVERY_TOKEN = process.env.DELHIVERY_API_TOKEN;

const delhiveryApi = axios.create({
  baseURL: DELHIVERY_BASE_URL,
  headers: {
    Authorization: `Token ${DELHIVERY_TOKEN}`,
  },
});

// Pincode serviceability check
export const checkServiceability = async (pincode) => {
  const res = await delhiveryApi.get(`/c/api/pin-codes/json/?filter_codes=${pincode}`);
  return res.data;
};

// Create shipment order
export const createShipment = async (shipmentData) => {
  const payload = {
    shipments: [shipmentData],
    pickup_location: {
      name: process.env.DELHIVERY_PICKUP_NAME,
      add: process.env.DELHIVERY_PICKUP_ADDRESS,
      city: process.env.DELHIVERY_PICKUP_CITY,
      pin: process.env.DELHIVERY_PICKUP_PIN,
      phone: process.env.DELHIVERY_PICKUP_PHONE,
    },
  };

  const res = await delhiveryApi.post(
    "/api/cmu/create.json",
    `format=json&data=${JSON.stringify(payload)}`,
    { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
  );
  return res.data;
};

// Track shipment
export const trackShipment = async (waybill) => {
  const res = await delhiveryApi.get(`/api/v1/packages/json/?waybill=${waybill}`);
  return res.data;
};


export const getShippingCharge = async (destinationPincode, totalWeightGrams, paymentMode = "Pre-paid") => {
  const res = await delhiveryApi.get("/api/kinko/v1/invoice/charges/.json", {
    params: {
      md: "E", // E = Express, S = Surface — jo bhi tumhara account use karta hai
      ss: "Delivered",
      d_pin: destinationPincode,
      o_pin: process.env.DELHIVERY_PICKUP_PIN,
      cgm: totalWeightGrams,
      pt: paymentMode,
    },
  });
  return res.data;
};