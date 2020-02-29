import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.action';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import { ReactComponent as ShoppingIcon } from '../../svg/shopping-bag.svg';
import {
  CartIconWrapper,
  ShoppingIconWrapper,
  ItemCount
} from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <>
      <CartIconWrapper onClick={toggleCartHidden}>
        <ShoppingIconWrapper>
          <ShoppingIcon />
        </ShoppingIconWrapper>
        <ItemCount>{itemCount}</ItemCount>
      </CartIconWrapper>
    </>
  );
};

const mapStateToprops = state => ({
  itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToprops, mapDispatchToProps)(CartIcon);
