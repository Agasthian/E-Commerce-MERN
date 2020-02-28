import React from 'react';
import { connect } from 'react-redux';

import CartItem from '../cart-item/cart.item';
import Button from '../button/button';
import {
  CartDropdownWrapper,
  CartItems,
  EmptyCart,
  ButtonWrapper
} from './cart-dropdown.styles';

const CartDropdown = ({ cartItems }) => {
  return (
    <>
      <CartDropdownWrapper>
        <CartItems>
          {cartItems.map(cartItem => (
            <CartItem key={cartItem._id} item={cartItem} />
          ))}
        </CartItems>
        {/* <EmptyCart>Your cart is Empty</EmptyCart> */}
        <ButtonWrapper>
          <Button title='Go to Checkout' icon='shopping-cart' to='/' />
        </ButtonWrapper>
      </CartDropdownWrapper>
    </>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default connect(mapStateToProps)(CartDropdown);
