import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart.item';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.action.js';

import Button from '../button/button';
import {
  CartDropdownWrapper,
  CartItems,
  EmptyCart,
  ButtonWrapper
} from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <>
      <CartDropdownWrapper>
        {cartItems.length ? (
          <CartItems>
            {cartItems.map(cartItem => (
              <CartItem key={cartItem._id} item={cartItem} />
            ))}
          </CartItems>
        ) : (
          <EmptyCart>Your cart is Empty</EmptyCart>
        )}

        <ButtonWrapper>
          <Button
            title='Go to Checkout'
            icon='shopping-cart'
            onClick={() => {
              history.push('/checkout');
              dispatch(toggleCartHidden());
            }}
          />
        </ButtonWrapper>
      </CartDropdownWrapper>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
