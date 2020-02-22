import React, { useState } from 'react';

const RadioButton = ({ prices, handleFilters }) => {
  //State
  const [values, setValues] = useState(0);

  //Handle Change
  const handleChange = event => {
    handleFilters(event.target.value);
    setValues(event.target.value);
  };

  return prices.map((price, i) => (
    <div key={i}>
      <input
        type='radio'
        onChange={handleChange}
        value={`${price._id}`}
        name={price}
        className='mr-2 ml-4'
      />
      <label className='form-check-label '> {price.name}</label>
    </div>
  ));
};

export default RadioButton;
