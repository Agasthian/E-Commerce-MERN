import React from 'react';
import { Link } from 'react-router-dom';

import DisplayImage from '../display-image/displayImage';
import './card.styles.scss';

const Card = ({ product }) => {
  //Destructing
  const { name, description, price } = product;

  return (
    <div className='card-item'>
      <div className='image'>
        <DisplayImage item={product} url='product' />
      </div>
      <div className='card-details'>
        <div className='name'>{name}</div>
        <div className='price'>Rs.{price}/-</div>
      </div>
    </div>
  );
};

export default Card;
