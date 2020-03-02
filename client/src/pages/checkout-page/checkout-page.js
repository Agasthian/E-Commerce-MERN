import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item';
import BreadCrumbs from '../../components/bread-crumbs/breadcrumbs';

import { selectCartItems } from '../../redux/cart/cart.selector';
import { selectCartTotal } from '../../redux/cart/cart.selector';

import { Container } from '../../utils/utils';
import {
  CheckoutPageWrapper,
  CheckoutHeader,
  HeaderBlock,
  Total,
  Button,
  TestWarning
} from './checkout-page.styles';

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <>
      <BreadCrumbs name={'Checkoutpage'} currentPage={'Checkout'} />
      <Container>
        <CheckoutPageWrapper>
          <CheckoutHeader>
            <HeaderBlock>
              <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Remove</span>
            </HeaderBlock>
          </CheckoutHeader>
          {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem._id} cartItem={cartItem} />
          ))}
          <Total>
            <span>Total : Rs.{total}/-</span>
          </Total>
        </CheckoutPageWrapper>
      </Container>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
