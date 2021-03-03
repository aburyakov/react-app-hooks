import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getAllProducts } from '../../store/selectors/cart';
import { cartRemove, cartSave } from '../../store/actions/cart';
import Product from "../../components/Product/Product";

function Cart() {
  const products = useSelector(getAllProducts);
  const dispatch = useDispatch();

  function removeProduct (productId) {
    dispatch(cartRemove(productId));
    dispatch(cartSave());
  };

  return (
    <React.Fragment>
    <h3>Your Cart</h3>
      <div className="products-container">
        {
          products.map((product, index) => {
            return (
              <Product product={product} removeProduct={removeProduct} key={product.code}></Product>
            );
          })
        }
      </div>
    </React.Fragment>
  );
}

export default Cart;
