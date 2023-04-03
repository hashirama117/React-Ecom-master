const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
  {
    User: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "UserModel",
    },
    ProductName: {
      type: String,
      required: [true, "please add a productName"],
    },
    ProductDescription: {
      type: String,
      required: [true, "please add a productDescription"],
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Products", productSchema);
