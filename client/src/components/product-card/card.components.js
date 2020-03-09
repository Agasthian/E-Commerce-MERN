import React from 'react';

import AddToCartBtn from '../add-to-cart-button/add-to-cart-button';
import DisplayImage from '../display-image/displayImage';
import {
  CardWrapper,
  DetailsWrapper,
  Title,
  Price,
  Description
} from './card.styles';

const Card = ({ product }) => {
  //Destructing
  const { name, description, price, _id } = product;

  return (
    <CardWrapper to={`/product/${_id}`}>
      <DisplayImage item={product} url='product' />
      <DetailsWrapper>
        <Title>{name}</Title>
        <Description>{description.substring(0, 25)}</Description>
        <Price>Rs.{price}/-</Price>
      </DetailsWrapper>
      <AddToCartBtn product={product} />
    </CardWrapper>
  );
};

export default Card;
