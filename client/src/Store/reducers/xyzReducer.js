import { ADD_TO_CART, DELETE_FROM_CART } from "../actions/actionTypes";

const initialState = {
  order: [],
  delOrder: []
};

const orderReducer = (state = initialState, action) => {
  //  console.log(action);
  if (action.type === ADD_TO_CART) {
    console.log(state.order);
    return {
      order: [...state.order, action.order]
    };
  }

  if (action.type === DELETE_FROM_CART) {
    if (action.value > -1) {
      state.order.splice(action.value, 1);
    }

    return {
      order: [...state.order]
    };
  }

  return state;
};

export default orderReducer;
