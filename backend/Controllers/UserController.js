const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const user = require("../Model/UserModel");

//Desc Register a User
//Route post /api/users
//Access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("please fill the required fields");
  }
  //check if user exists
  const existUser = await user.findOne({ email });
  if (existUser) {
    res.status(400);
    throw new Error("user already registered");
  }
  //hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  //Create User
  const User = await user.create({
    name,
    email,
    password: hashedPassword,
  });
  if (User) {
    res.status(201).json({
      _id: User.id,
      name: User.name,
      email: User.email,
      Token: generateToken(User._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});
//Desc Authenticate a User
//Route post /api/users/login
//Access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //check for email
  const User = await user.findOne({ email });

  if (User && (await bcrypt.compare(password, User.password))) {
    res.json({
      _id: User.id,
      name: User.name,
      email: User.email,
      Token: generateToken(User._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});
//Desc Get User data
//Route post /api/users/me
//Access Public
const getUser = asyncHandler(async (req, res) => {
  res.json({ message: "here is the user data" });
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getUser,
};
