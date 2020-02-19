import React, { useState, useEffect } from 'react';

import './checkbox.styles.scss';

const CheckBox = ({ categories }) => {
  return categories.map((c, i) => (
    <li key={i} className='list-unstyle'>
      <input type='checkbox' className='checkbox-input' />
      <label>{c.name}</label>
    </li>
  ));
};

export default CheckBox;
