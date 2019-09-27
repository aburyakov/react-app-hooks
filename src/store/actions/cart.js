import {
  CART_ADD,
  CART_REMOVE,
  CART_SAVE,
} from './actionTypes';


export function cartAdd(product) {
  return {
    type: CART_ADD,
    product,
  };
}

export function cartRemove(productId) {
  return {
    type: CART_REMOVE,
    productId,
  };
}

export function cartSave() {
  return {
    type: CART_SAVE,
  };
}
