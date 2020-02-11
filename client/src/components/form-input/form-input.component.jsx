import React from 'react';

import './form-input.style.scss';

export const FormInput = ({ label, handleChange, ...otherProps }) => {
  return (
    <div className='group'>
      <input className='form-input' onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export const FormInputPhoto = ({
  label,
  type,
  handleChange,
  ...otherProps
}) => {
  return (
    <div className='group'>
      <label className='form-input-label-photo'>{label}</label>
      <input
        className='form-input'
        onChange={handleChange}
        type={type}
        name='photo'
        accept='image/*'
      />
    </div>
  );
};

export const FormInputTextArea = ({ label, handleChange, ...otherProps }) => {
  return (
    <div className='group'>
      <textarea
        className='form-input'
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};
export const FormInputSelect = ({
  name,
  label,
  handleChange,
  categories,
  option1,
  optionText1,
  option2,
  optionText2
}) => {
  return (
    <div className='group'>
      <label className='form-input-label-select'>{label}</label>
      {name === 'category' ? (
        <select onChange={handleChange}>
          <option>Please Select</option>
          {categories &&
            categories.map((c, i) => <option value={c._id}>{c.name}</option>)}
        </select>
      ) : (
        <select onChange={handleChange}>
          <option>Please Select</option>
          <option value={option1}>{optionText1}</option>
          <option value={option2}>{optionText2}</option>
        </select>
      )}
    </div>
  );
};
