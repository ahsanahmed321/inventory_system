//Core Imports
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Import Model
let Payment = require("../../models/payment");
let Transaction = require("../../models/transaction");

//Routes

//Testing Route
router.get("/", (req, res) => {
  res.json({ msg: "Hello transaction" });
});

module.exports = router;
