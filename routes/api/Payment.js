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
    const payment = Payment(req.body);
    payment
      .save()
      .then(result => res.json(result))
      .catch(error => res.json(error));
  }
});

module.exports = router;

// Search Payment
//api/payment/search

router.get("/search", (req, res) => {
  console.log(req.query);
  const Query = {};
  if (req.query.name) Query["customer.customer_name"] = req.query.name;
  if (req.query.contact_no) Query["customer.contact_no"] = req.query.contact;
  if (req.query.city) Query["customer.city"] = req.query.city;

  Payment.find(Query)
    .then(result => res.json(result))
    .catch(error => res.json(error));
});
