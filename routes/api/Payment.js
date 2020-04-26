//Core Imports
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

//Custom Imports
const transactionPipe = require("../../utils/TransactionPipe");

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
      .then(result => {
        const transaction = transactionPipe(result);

        const transactionInstance = Transaction(transaction);
        transactionInstance.Withdraw = false;
        transactionInstance
          .save()
          .then(transactionHistory => res.json(transactionHistory))
          .catch(errorr => res.json(errorr));
      })
      .catch(error => res.json(error));
  }
});

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

//Delete Payment
router.delete("/delete", (req, res) => {
  Payment.findOneAndDelete({ _id: req.body.id })
    .then(result => {
      Transaction.findOneAndDelete({
        payment_id: req.body.id
      })
        .then(transactionHistory => res.json(transactionHistory))
        .catch(errorr => res.json(errorr));
    })
    .catch(error => res.json(error));
});

//Delete Product
router.patch("/deleteproduct", (req, res) => {
  console.log("Ahsan");
  Payment.findOneAndUpdate(
    { _id: req.body.id, "product._id": req.body.product },
    { $pull: { product: { _id: req.body.product } } },
    { new: true }
  )
    .then(result => {
      console.log("bye");
      const transaction = transactionPipe(result);
      console.log("Hi there");
      console.log(transaction);
      Transaction.findOneAndUpdate(
        { payment_id: result._id },
        { $set: transaction },
        { new: true }
      )
        .then(trans => res.json(trans))
        .catch(err => res.json(err));
    })
    .catch(error => res.json(error));
});

//Update Product
router.patch("/updateproduct", (req, res) => {
  const updatedProduct = req.body.newProduct;
  Payment.findOne({ _id: req.body.id, "product._id": req.body.product })
    .then(result => {
      if (result) {
        Payment.findOneAndUpdate(
          { _id: req.body.id, "product._id": req.body.product },
          { $set: { "product.$": updatedProduct } },
          { new: true }
        )
          .then(abc => {
            const transaction = transactionPipe(abc);
            Transaction.findOneAndUpdate(
              { payment_id: result._id },
              { $set: transaction },
              { new: true }
            )
              .then(trans => res.json(trans))
              .catch(err => res.json(err));
          })
          .catch(xyz => res.json(xyz));
      } else {
        Payment.findOne({ _id: req.body.id })
          .then(resultt => {
            resultt.product.unshift(updatedProduct);
            resultt
              .save()
              .then(abc => {
                const transaction = transactionPipe(abc);
                Transaction.findOneAndUpdate(
                  { payment_id: result._id },
                  { $set: transaction },
                  { new: true }
                )
                  .then(trans => res.json(trans))
                  .catch(err => res.json(err));
              })
              .catch(err => res.json(err));
          })
          .catch(errorr => res.json(errorr));
      }
    })
    .catch(error => res.json(error));
});

module.exports = router;
