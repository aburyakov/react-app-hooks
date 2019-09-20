import {
  CART_ADD,
  CART_REMOVE,
  CART_SAVE
} from '../actions/actionTypes';

const initialState = {
  lastId: 0,
  cart: JSON.parse(localStorage.getItem('cart')) || [],
}

const actions = {
  [CART_ADD](state, action) {
    let nextId = state.lastId + 1;
    return {
      ...state,
      lastId: nextId,
      cart: [
        ...state.cart,
        {
          id: nextId,
          code: action.product
        }
      ]
    }
  },
  [CART_REMOVE](state, action) {
    return {
      ...state, 
      cart : state.cart.filter((product) => {
        if(product.id !== action.productId) {
          return product;
        }
        return false;
      })
    }
  },
  [CART_SAVE](state, action) {
    localStorage.setItem('cart', JSON.stringify(state.cart));
    return {
      ...state,
    }
  }
}

export default function cartReducer(state = initialState, action) {
  if(typeof actions[action.type] === 'function') {
    return actions[action.type].call(this, state, action);
  }
  return state;
}
