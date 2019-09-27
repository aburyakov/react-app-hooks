import {combineReducers} from 'redux';
import domainReducer from './domain';
import cartReducer from './cart';

export default combineReducers({
  domain: domainReducer,
  cart: cartReducer,
});
