const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePaymentInput(data) {
  let errors = {};

  // date validation

  if (!data.date || Validator.isEmpty(data.date)) {
    errors.date = "Date cannot be Empty";
  }

  // customer validation

  if (Object.keys(data.customer).length > 4) {
    errors.overload = "Customer Schema Trespassing";
  }

  if (
    !data.customer.customer_name ||
    Validator.isEmpty(data.customer.customer_name)
  ) {
    errors.customer_name = "Customer Name cannot be Empty";
  }
  if (
    !data.customer.contact_no ||
    Validator.isEmpty(data.customer.contact_no)
  ) {
    errors.contact_no = "Contact number Cannot be Empty";
  }
  if (
    data.customer.contact_no &&
    !Validator.isNumeric(data.customer.contact_no)
  ) {
    errors.contact_no = "Invalid Contact Number";
  }
  if (!data.customer.address || Validator.isEmpty(data.customer.address)) {
    errors.address = "Address cannot be Empty";
  }
  if (!data.customer.city || Validator.isEmpty(data.customer.city)) {
    errors.city = "City Cannot be Empty";
  }

  // Product Validation
  if (!Array.isArray(data.product)) {
    errors.product = "Products need to wrapped in array";
  }

  if (data.product.length === 0) {
    errors.product = "Products cannot be Empty";
  }

  data.product.forEach((element, index) => {
    if (Object.keys(element).length > 6) {
      errors.product = `Product ${index}  Schema Tresspassing`;
    }
    if (!element.product_id || Validator.isEmpty(element.product_id)) {
      let productId = "productId" + Number(index + 1);
      errors[productId] = `Product  ${index + 1}  Id cannot be empty`;
    }
    if (!element.product_name || Validator.isEmpty(element.product_name)) {
      let productName = "productName" + Number(index + 1);
      errors[productName] = `Product  ${index + 1}  Name cannot be empty`;
    }
    if (!element.cost_price || Validator.isEmpty(element.cost_price)) {
      let costPrice = "costPrice" + Number(index + 1);
      errors[costPrice] = `Product  ${index + 1} Cost Price cannot be empty`;
    }
    if (element.cost_price && !Validator.isNumeric(element.cost_price)) {
      let costPriceInvalid = "costPriceInvalid" + Number(index + 1);
      errors[costPriceInvalid] = `Product  ${index +
        1} Cost Price cannot be non number`;
    }

    if (!element.sell_price || Validator.isEmpty(element.sell_price)) {
      let sellPrice = "sellPrice" + Number(index + 1);
      errors[sellPrice] = `Product  ${index + 1} Sell Price cannot be empty`;
    }
    if (element.sell_price && !Validator.isNumeric(element.sell_price)) {
      let sellPriceInvalid = "sellPriceInvalid" + Number(index + 1);
      errors[sellPriceInvalid] = `Product  ${index +
        1} Sell Price cannot be non number`;
    }
    if (!element.ownership || Validator.isEmpty(element.ownership)) {
      let ownership = "ownership" + Number(index + 1);
      errors[ownership] = `Product  ${index + 1}  ownership cannot be empty`;
    }
    if (!element.payment || Validator.isEmpty(element.payment)) {
      let payment = "payment" + Number(index + 1);
      errors[payment] = `Product  ${index + 1}  payment cannot be empty`;
    }
  });

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
