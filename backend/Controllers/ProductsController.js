const asyncHandler = require("express-async-handler");
const ProductsModel = require("../Model/ProductsModel");
//Desc getProducts
//Route GET /api/products
//Access Private
const getProducts = asyncHandler(async (req, res) => {
  const products = await ProductsModel.find();
  res.json(products);
});
//Desc post a Product
//Route post /api/products
//Access Private
const postProducts = asyncHandler(async (req, res) => {
  if (
    !req.body.ProductName ||
    !req.body.ProductDescription
  ) {
    res.status(400);
    throw new Error("please add a text here");
  }
  const products = await ProductsModel.create({
    ProductId: req.body.ProductId,
    ProductName: req.body.ProductName,
    ProductDescription: req.body.ProductDescription,
  });
  // console.log(req.body);
  res.json(products);
});
//Desc update a Product
//Route PUT /api/products/:id
//Access Private
const putProducts = asyncHandler(async (req, res) => {
  const products = await ProductsModel.findById(req.params.id);
  if (!products) {
    res.status(400);
    throw new Error("product not found");
  }

  const updatedProduct = await ProductsModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedProduct);
});
//Desc Delete a Product
//Route DELETE /api/products/:id
//Access Private
const deleteProducts = asyncHandler(async (req, res) => {
  const product = await ProductsModel.findById(req.params.id);
  if (!product) {
    res.status(400);
    throw new Error("product not found");
  }
  await ProductsModel.deleteOne();
  res.json({ id: req.params.id });
});
module.exports = {
  getProducts,
  postProducts,
  putProducts,
  deleteProducts,
};
