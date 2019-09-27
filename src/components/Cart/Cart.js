import React from 'react';
import { useSelector } from 'react-redux';
import { getAllProducts } from '../../store/selectors/cart';
import Product from "./Product/Product";

function Cart() {
  const products = useSelector(getAllProducts);
  return (
    <React.Fragment>
      <h3>Your Cart</h3>
      { 
        <div className="products-container">
          {
            products.map((product, index) => {
              return (
                <Product product={product} key={product.code}></Product>
              );
            })
          }
        </div>
      }
    </React.Fragment>
  );
}

export default Cart;


