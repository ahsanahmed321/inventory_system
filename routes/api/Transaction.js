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

router.get("/non_withdraw_clear", (req, res) => {
  Transaction.find({ Withdraw: false, credit: 0, due_amount: 0 })
    .select({
      profit: 1,
      _id: 0
    })
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      console.log(error);
    });
});

router.get("/non_withdraw_Unclear", (req, res) => {
  Transaction.find({
    Withdraw: false,
    $or: [{ credit: { $gt: 0 } }, { due_amount: { $gt: 0 } }]
  })
    .select({
      due_amount: 1,
      credit: 1,
      total_amount: 1,
      paid_amount: 1,
      _id: 0
    })
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      console.log(error);
    });
});

// withdraw amount with clear debit and credit
router.post("/withdraw", (req, res) => {
  Transaction.updateMany(
    { Withdraw: false, credit: 0, due_amount: 0 },
    { Withdraw: true }
  )
    .then(result => res.json(result))
    .catch(error => console.log(error));
});

//filter with credit and debit
router.get("/filter", (req, res) => {
  if (req.query.credit === "true" && req.query.due_amount === "false") {
    const Payment_Ids = [];
    Transaction.find({ credit: { $gt: 0 } })
      .then(result => {
        result.forEach(element => {
          Payment_Ids.push(element.payment_id);
        });

        Payment.find({ _id: { $in: Payment_Ids } })
          .then(realResult => {
            res.json(realResult);
          })
          .catch(realError => {
            console.log(realError);
          });
      })

      .catch(error => console.log(error));
  }

  if (req.query.credit === "false" && req.query.due_amount === "true") {
    const Payment_Ids = [];
    Transaction.find({ due_amount: { $gt: 0 } })
      .then(result => {
        result.forEach(element => {
          Payment_Ids.push(element.payment_id);
        });

        Payment.find({ _id: { $in: Payment_Ids } })
          .then(realResult => {
            res.json(realResult);
          })
          .catch(realError => {
            console.log(realError);
          });
      })

      .catch(error => console.log(error));
  }

  if (req.query.credit === "true" && req.query.due_amount === "true") {
    const Payment_Ids = [];
    Transaction.find({ credit: { $gt: 0 }, due_amount: { $gt: 0 } })
      .then(result => {
        result.forEach(element => {
          Payment_Ids.push(element.payment_id);
        });

        Payment.find({ _id: { $in: Payment_Ids } })
          .then(realResult => {
            res.json(realResult);
          })
          .catch(realError => {
            console.log(realError);
          });
      })

      .catch(error => console.log(error));
  }
});

module.exports = router;
