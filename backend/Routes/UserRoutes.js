const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUser,
} = require("../Controllers/UserController");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", getUser);

module.exports = router;
