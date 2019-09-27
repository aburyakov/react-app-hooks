import React from 'react';
import Button from '../../UI/Button/Button';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { cartRemove, cartSave } from '../../../store/actions/cart';

function Product({ product }) {
  const dispatch = useDispatch();

  const removeProduct = () => {
    dispatch(cartRemove(product.id));
    dispatch(cartSave());
  };

  return (
    <div className="product">
      <span className="product-name">{ product.code }</span>
      <span className="product-delete">
        <Button onClick={removeProduct}>Delete</Button>
      </span>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
