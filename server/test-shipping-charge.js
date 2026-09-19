// test-shipping-charge.js
import { getShippingCharge } from "./utils/delhivery.js";
import dotenv from "dotenv";
dotenv.config();

const test = async () => {
  try {
    const data = await getShippingCharge("110053", 500); // 500 gram test
    console.log(JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Error:", err.response?.data || err.message);
  }
};

test();