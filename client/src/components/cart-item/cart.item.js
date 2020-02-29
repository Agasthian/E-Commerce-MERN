import React from 'react';
import DisplayImage from '../display-image/displayImage';
import { CartItemWrapper, Image, ItemDetails, Name } from './cart.item.styles';

const CartItem = ({ item }) => {
  const { name, price, purchaseQuantity } = item;
  return (
    <>
      <CartItemWrapper>
        <Image>
          <DisplayImage item={item} url='product' />
        </Image>
        <ItemDetails>
          <Name>{name}</Name>
          <Name>
            {purchaseQuantity}* Rs.{price}
          </Name>
        </ItemDetails>
      </CartItemWrapper>
    </>
  );
};

export default CartItem;
