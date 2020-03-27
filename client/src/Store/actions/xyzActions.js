import { ADD_TO_CART, DELETE_FROM_CART } from "./actionTypes";

export const addToCart = payload => {
  // console.log(payload)
  return {
    type: ADD_TO_CART,
    order: payload
  };
};

export const deleteFromCart = payload => {
  return {
    type: DELETE_FROM_CART,
    value: payload
  };
};
