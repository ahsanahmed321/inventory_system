//Core Imports
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Import Validator
const validatePaymentInput = require("../../validation/add-payment");

// Import Model
let Payment = require("../../models/payment");
let Transaction = require("../../models/transaction");

//Routes

//Testing Route
router.get("/", (req, res) => {
  console.log(req.body);
  res.json({ msg: "Hello Payment" });
});

//Add Payment
//api/payment/add
router.post("/add", (req, res) => {
  const { errors, isValid } = validatePaymentInput(req.body);

  if (!isValid) {
    res.status(400).json(errors);
  } else {
    const payment = req.body;
    res.json(payment);
  }
});

module.exports = router;
