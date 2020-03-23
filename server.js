// core imports
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// routes import
const Payment = require("./routes/api/Payment");
const Transaction = require("./routes/api/Transaction");

// Starting a server
const app = express();

// Using core middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// connection to database
const db = require("./config/key").mongoURI;
mongoose
  .connect(db)
  .then(() => console.log("mongo db connected"))
  .catch(err => console.log(err));

// Using route middlewares
app.use("/api/payment", Payment);
app.use("/api/transaction", Transaction);

// listening on Port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is listening on port ${port}`));
