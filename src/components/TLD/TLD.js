import React, { Component } from 'react';
import { cartAdd, cartRemove, cartSave } from '../../store/actions/cart';
import {connect} from 'react-redux'
import './TLD.css';

class TLD extends Component {

  constructor(proprs) {
    super();
  }

  inCart() {
    let res = false;
    this.props.cart.some(product => {
      if(product.code === this.props.domain) {
        res = product;
        return true;
      }
      return false;
    });
    return res;
  }

  toogleProduct(domain) {
    let inCart = this.inCart();
    if(inCart) {
      this.props.removeDomain(inCart.id);
    } else {
      this.props.addDomain(domain);
    }
  }

  render () {
    var tld = '.' + this.props.domain.split('.').splice(1).join('.');
    return (
      <React.Fragment>
        <div className={ this.inCart() ? 'tld-added' : '' } onClick={this.toogleProduct.bind(this, this.props.domain)}>{ tld }</div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart.cart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addDomain: (domain) => {
      dispatch(cartAdd(domain));
      dispatch(cartSave());
    },
    removeDomain: (domain) => {
      dispatch(cartRemove(domain));
      dispatch(cartSave());
    }
  }
}

export default  connect(mapStateToProps, mapDispatchToProps)(TLD);
