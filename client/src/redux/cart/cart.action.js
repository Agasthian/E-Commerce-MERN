import cartActionTypes from './cart.action.types';

export const toggleCartHidden = () => ({
  type: cartActionTypes.TOGGLE_HIDDEN_CART
});

export const addItem = item => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item
});
