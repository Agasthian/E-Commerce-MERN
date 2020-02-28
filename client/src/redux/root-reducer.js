import { combineReducers } from 'redux';
import authReducers from './auth/authReducers';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
  auth: authReducers,
  cart: cartReducer
});
