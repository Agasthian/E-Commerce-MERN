import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '../button/button';
import {
  CartDropdownWrapper,
  CartItems,
  EmptyCart,
  ButtonWrapper
} from './cart-dropdown.styles';

const CartDropdown = () => {
  return (
    <>
      <CartDropdownWrapper>
        <CartItems />
        <EmptyCart>Your cart is Empty</EmptyCart>
        <ButtonWrapper>
          <Button title='Go to Checkout' icon='shopping-cart' to='/' />
        </ButtonWrapper>
      </CartDropdownWrapper>
    </>
  );
};

export default CartDropdown;
