import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, require: true },
  description: { type: Array, require: true },
  price: { type: Number, require: true },
  image: { type: Array, require: true },
  category: { type: String, require: true },
  subCategory: { type: String, require: true },
  size: { type: Array, require: true },
  bestseller: { type: Boolean },
  date: { type: Number, require: true },
});

const productModel =
  mongoose.model.product || mongoose.model("product", productSchema);

export default productModel;
