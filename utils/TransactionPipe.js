const TransactionPipe = result => {
  console.log(result);
  //calculating Total Amount

  var totalAmount = 0;
  result.product.forEach(element => {
    totalAmount = totalAmount + element.sell_price;
  });

  //Calculating Paid Amount
  var paidAmount = 0;
  result.product.forEach(element => {
    if (element.payment === "paying") {
      paidAmount = paidAmount + element.sell_price;
    }
  });

  //calculating Due Amount
  var dueAmount = totalAmount - paidAmount;

  //Calculating Credit Amount
  var creditAmount = 0;
  result.product.forEach(element => {
    if (element.ownership === "credit") {
      creditAmount = creditAmount + element.cost_price;
    }
  });

  //Calculating Profits
  var Profit = 0;
  result.product.forEach(element => {
    Profit = Profit + (element.sell_price - element.cost_price);
  });

  console.log(totalAmount, paidAmount, dueAmount, creditAmount, Profit);
  const transaction = {
    payment_id: result._id,
    total_amount: totalAmount,
    paid_amount: paidAmount,
    due_amount: dueAmount,
    credit: creditAmount,
    profit: Profit
  };

  console.log("transaction");
  console.log(transaction);
  return transaction;
};

module.exports = TransactionPipe;
