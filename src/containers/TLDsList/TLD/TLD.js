import React, {useMemo} from 'react';
import { cartAdd, cartRemove, cartSave } from '../../../store/actions/cart';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './TLD.css';
import { getProductById } from '../../../store/selectors/cart';

function TLD({ domain }) {
  const dispatch = useDispatch();
  const selectGetProductById = useMemo(getProductById, [domain]);// for multiple component instances depends on the component's props
  const inCart = useSelector((state) => selectGetProductById(state, domain));

  const addDomain = (domainName) => {
    dispatch(cartAdd(domainName));
    dispatch(cartSave());
  };
  const removeDomain = (domainId) => {
    dispatch(cartRemove(domainId));
    dispatch(cartSave());
  };

  const toogleProduct = (event) => {
    if (inCart) {
      removeDomain(inCart.id);
    } else {
      addDomain(domain);
    }
  };

  const tld = '.' + domain.split('.').splice(1).join('.');

  return (
    <div className={ inCart ? 'tld-added' : '' } onClick={toogleProduct}>{ tld }</div>
  );
}

TLD.propTypes = {
  domain: PropTypes.string.isRequired,
};

export default TLD;
