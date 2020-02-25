import React from 'react';

import DisplayImage from '../display-image/displayImage';
import { CardWrapper, DetailsWrapper, Title, Price } from './card.styles';

const Card = ({ product }) => {
  //Destructing
  const { name, description, price, _id } = product;

  return (
    <CardWrapper to={`/product/${_id}`}>
      <DisplayImage item={product} url='product' />
      <DetailsWrapper>
        <Title>{name}</Title>
        <Title>{description.substring(0, 100)}</Title>
        <Price>Rs.{price}/-</Price>
      </DetailsWrapper>
    </CardWrapper>
  );
};

export default Card;
