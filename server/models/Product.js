import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    discountPrice: { type: Number },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    description: { type: String },
    stock: { type: Number, default: 10 },
    images: [{ type: String }],
    sizes: [{ type: String }],
    scents: [{ type: String }],
    colors: [
      {
        name: { type: String },
        hex: { type: String },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);