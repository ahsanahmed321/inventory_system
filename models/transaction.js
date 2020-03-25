const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
  payment_id: { type: mongoose.Types.ObjectId, ref: "payment" },
  paid_amount: { type: Number, required: true },
  credit: { type: Number, required: true },
  profit: { type: Number, required: true },
  due_amount: { type: Number, required: true }
});

module.exports = Transaction = mongoose.model("transaction", TransactionSchema);
