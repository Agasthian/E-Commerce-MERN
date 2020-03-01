import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Layout from '../../components/layout/Layout';
import CheckoutItem from '../../components/checkout-item/checkout-item';

import { selectCartItems } from '../../redux/cart/cart.selector';
import { selectCartTotal } from '../../redux/cart/cart.selector';

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
    <Layout>
      <h2>Checkoutpage</h2>
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
    </Layout>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
