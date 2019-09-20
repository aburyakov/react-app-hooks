import React from 'react';
import { cartAdd, cartRemove, cartSave } from '../../store/actions/cart';
import { useDispatch, useSelector } from 'react-redux'
import './TLD.css';

function TLD(props) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const inCart = () => {
    let res = false;
    cart.some(product => {
      if(product.code === props.domain) {
        res = product;
        return true;
      }
      return false;
    });
    return res;
  }

  const addDomain = (domain) => {
    dispatch(cartAdd(domain));
    dispatch(cartSave());
  };
  const removeDomain = (domain) => {
    dispatch(cartRemove(domain));
    dispatch(cartSave());
  };

  const toogleProduct = (event) => {
    let inCartData = inCart();
    if(inCartData) {
      removeDomain(inCartData.id);
    } else {
      addDomain(props.domain);
    }
  }

  var tld = '.' + props.domain.split('.').splice(1).join('.');

  return (
    <React.Fragment>
      <div className={ inCart() ? 'tld-added' : '' } onClick={toogleProduct}>{ tld }</div>
    </React.Fragment>
  )
}

export default  TLD;
