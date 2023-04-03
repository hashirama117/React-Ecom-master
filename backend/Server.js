const express = require("express");
// const { default: data } = require("./data");
const dotenv = require("dotenv").config();
const colors = require("colors");
const { errorHandler } = require("./MiddleWares/errormiddleware");
const port = process.env.PORT || 5000;
const connectDb = require("./Config/Db");

connectDb();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/products", require("./Routes/ProductsRoutes"));
app.use("/api/users", require("./Routes/UserRoutes"));
app.use(errorHandler);

app.listen(port, () => console.log(`serving at ${port}`));
