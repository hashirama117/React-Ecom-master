const express = require("express");
const router = express.Router();
const {
  getProducts,
  postProducts,
  putProducts,
  deleteProducts,
} = require("../Controllers/ProductsController");

router.route("/").get(getProducts).post(postProducts);
router.route("/:id").put(putProducts).delete(deleteProducts);

module.exports = router;
