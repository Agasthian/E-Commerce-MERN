import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import CheckoutItem from '../../components/checkout-item/checkout-item';
import BreadCrumbs from '../../components/bread-crumbs/breadcrumbs';
import Button from '../../components/button/button';
import PayByRazorPay from '../../components/razorpay/razorpay';
import { isAuthenticated } from '../../auth';

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selector';

import { Container } from '../../utils/utils';
import {
  CheckoutPageWrapper,
  CheckoutHeader,
  HeaderBlock,
  Total
} from './checkout-page.styles';

const CheckoutPage = ({ cartItems, total }) => {
  //Show Check out button
  const showCheckOut = () => {
    return isAuthenticated() ? (
      <PayByRazorPay />
    ) : (
      <Link to='/signin'>
        <Button title='Sign in to checkout' />
      </Link>
    );
  };
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
          {showCheckOut()}
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
