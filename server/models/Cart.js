import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, default: 1 },
  selection: {
    size: String,
    scent: String,
    color: String,
  },
  customization: { type: mongoose.Schema.Types.Mixed, default: {} },
});

const cartSchema = new mongoose.Schema(
  {
    cartId: { type: String, required: true, unique: true }, 
    items: [cartItemSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Cart", cartSchema);