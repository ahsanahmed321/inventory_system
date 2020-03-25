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
    console.log("check");
    const payment = Payment(req.body);
    payment
      .save()
      .then(result => {
        //calculating Total Amount

        totalAmount = 0;
        result.product.forEach(element => {
          totalAmount = totalAmount + element.sell_price;
        });

        //Calculating Paid Amount
        paidAmount = 0;
        result.product.forEach(element => {
          if (element.payment === "paying") {
            paidAmount = paidAmount + element.sell_price;
          }
        });

        //calculating Due Amount
        dueAmount = totalAmount - paidAmount;

        //Calculating Credit Amount
        creditAmount = 0;
        result.product.forEach(element => {
          if (element.ownership === "credit") {
            creditAmount = creditAmount + element.cost_price;
          }
        });

        //Calculating Profits
        Profit = 0;
        result.product.forEach(element => {
          Profit = Profit + (element.sell_price - element.cost_price);
        });

        const transaction = Transaction({
          payment_id: result._id,
          paid_amount: paidAmount,
          due_amount: dueAmount,
          credit: creditAmount,
          profit: Profit
        });

        transaction
          .save()
          .then(transactionHistory => res.json(transactionHistory))
          .catch(errorrr => res.json(errorrr));
      })
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
  if (req.query.address) Query["customer.address"] = req.query.address;
  if (req.query.product_name)
    Query["product.product_name"] = req.query.product_name;
  if (req.query.product_id) Query["product.product_id"] = req.query.product_id;

  Payment.find(Query)
    .then(result => res.json(result))
    .catch(error => res.json(error));
});
