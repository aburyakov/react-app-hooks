import {
  CART_ADD,
  CART_REMOVE,
  CART_SAVE,
} from '../actions/actionTypes';

const initialState = {
  lastId: 0,
  cart: JSON.parse(localStorage.getItem('cart')) || [],
};
initialState.lastId = initialState.cart.length ? initialState.cart[initialState.cart.length - 1].id : 0;

const actions = {
  [CART_ADD](state, action) {
    const nextId = state.lastId + 1;
    const newProduct = {
      id: nextId,
      code: action.product,
    };
    return {
      ...state,
      lastId: nextId,
      cart: [
        ...state.cart,
        newProduct,
      ],
    };
  },
  [CART_REMOVE](state, action) {
    const newCart = state.cart.filter((product) => {
      if (product.id !== action.productId) {
        return product;
      }
      return false;
    });
    return {
      ...state,
      cart: newCart,
    };
  },
  [CART_SAVE](state, action) {
    localStorage.setItem('cart', JSON.stringify(state.cart));
    return {
      ...state,
    };
  },
};

export default function cartReducer(state = initialState, action) {
  if (typeof actions[action.type] === 'function') {
    return actions[action.type](state, action);
  }
  return state;
}
