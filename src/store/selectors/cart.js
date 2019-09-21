import { createSelector } from 'reselect'

const getCartFromState = state => state.cart.cart;

export const getAllProducts = createSelector(
  getCartFromState,
  cart => cart
);

export const getProductById = () => {
  return createSelector(
    getCartFromState,
    (_, productCode) => productCode,
    (cart, productCode) => {
      let res = false;
      cart.some(product => {
        if(product.code === productCode) {
          res = product;
          return true;
        }
        return false;
      });
      return res;
    }
  );
}