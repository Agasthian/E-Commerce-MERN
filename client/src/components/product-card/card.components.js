import React from 'react';
import { Link } from 'react-router-dom';

import DisplayImage from '../display-image/displayImage';
import CustomButton from '../custom-button/custom-button.component';

const Card = ({ product }) => {
  return (
    <div className='col-4 mb-3'>
      <div className='card'>
        <div className='card-header'>{product.name}</div>
        <div className='card-body'>
          <DisplayImage item={product} url='product' />
          <p>{product.description}</p>
          <p>${product.price}</p>
          <Link to='/'>
            <CustomButton>View Product</CustomButton>
          </Link>
          <CustomButton>Add to Card</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Card;
