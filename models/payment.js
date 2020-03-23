const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
  date: {
    type: Date,
    required: true
  },

  customer: {
    //  customer_id: { type: String, required: true,  },
    customer_name: { type: String, required: true },
    contact_no: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true }
  },

  product: [
    {
      product_id: { type: String, required: true },
      product_name: { type: String, required: true },
      cost_price: { type: Number, required: true },
      sell_price: { type: Number, required: true },
      ownership: { type: String, required: true },
      payment: { type: String, required: true }
    }
  ]
});

module.exports = Payment = mongoose.model("payment", PaymentSchema);
