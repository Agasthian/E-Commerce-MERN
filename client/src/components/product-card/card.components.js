import React from 'react';

import DisplayImage from '../display-image/displayImage';
import { CardWrapper, DetailsWrapper, Title, Price } from './card.styles';

const Card = ({ product }) => {
  //Destructing
  const { name, description, price } = product;

  return (
    <CardWrapper to={'/'}>
      <DisplayImage item={product} url='product' />
      <DetailsWrapper>
        <Title>{name}</Title>
        <Price>Rs.{price}/-</Price>
      </DetailsWrapper>
    </CardWrapper>
  );
};

export default Card;
