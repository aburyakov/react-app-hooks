import React from 'react';
import Button from '../UI/Button/Button';
import PropTypes from 'prop-types';

function Product({ product, removeProduct }) {
  return (
    <div className="product">
      <span className="product-name">{ product.code }</span>
      <span className="product-delete">
        <Button onClick={() => removeProduct(product.id)}>Delete</Button>
      </span>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
