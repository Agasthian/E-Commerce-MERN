import React, { useState, useEffect } from 'react';

import './checkbox.styles.scss';

const CheckBox = ({ categories, handleFilters }) => {
  //State
  const [checked, setChecked] = useState([]);

  //Handle Toggle Checkekbox - Higher order function
  const handleToggle = categoryId => () => {
    //Check if the category is already present in state.  Returns first index or -1
    const currentCategoryId = checked.indexOf(categoryId);
    const newCheckedCategoryId = [...checked];

    // if currently checked was not there in checked state push
    // else pull or remove from state

    if (currentCategoryId === -1) {
      newCheckedCategoryId.push(categoryId);
    } else {
      newCheckedCategoryId.splice(currentCategoryId, 1);
    }

    // console.log(newCheckedCategoryId);
    setChecked(newCheckedCategoryId);
    handleFilters(newCheckedCategoryId); // passing the array of category ID s to the parent company
  };

  return categories.map((category, i) => (
    <li key={i} className='list-unstyle'>
      <input
        type='checkbox'
        onChange={handleToggle(category._id)}
        value={checked.indexOf(category._id === -1)}
        className='checkbox-input'
      />
      <label>{category.name}</label>
    </li>
  ));
};

export default CheckBox;
