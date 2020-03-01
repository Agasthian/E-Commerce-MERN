import React from 'react';
import { connect } from 'react-redux';

import DisplayImage from '../display-image/displayImage';
import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../redux/cart/cart.action';

import {
  CheckoutItemWrapper,
  ImageContainer,
  Text,
  Quantity,
  Value,
  Arrow,
  RemoveButton
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, price, purchaseQuantity } = cartItem;
  return (
    <CheckoutItemWrapper>
      <ImageContainer>
        <DisplayImage item={cartItem} url='product' />
      </ImageContainer>
      <Text>{name}</Text>
      <Quantity>
        <Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
        <Value>{purchaseQuantity}</Value>
        <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
      </Quantity>
      <Text>{price}</Text>
      <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemWrapper>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
