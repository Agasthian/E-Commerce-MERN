import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.action';

import { ReactComponent as ShoppingIcon } from '../../svg/shopping-bag.svg';
import {
  CartIconWrapper,
  ShoppingIconWrapper,
  ItemCount
} from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <>
      <CartIconWrapper onClick={toggleCartHidden}>
        <ShoppingIconWrapper>
          <ShoppingIcon />
        </ShoppingIconWrapper>
        <ItemCount>0</ItemCount>
      </CartIconWrapper>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);
