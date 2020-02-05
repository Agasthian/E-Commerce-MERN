import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signup } from '../../auth';

import './sign-up.styles.scss';

const Signup = () => {
  //Use State
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: '',
    success: false
  });

  //destructuring state
  const { name, email, password, confirmPassword, error, success } = values;

  //Handle Change method - higher order function
  const handleChange = name => event => {
    const { value } = event.target;

    setValues({ ...values, error: false, [name]: value });
  };

  //Handle submit
  const handleSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password }).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          name: '',
          enail: '',
          password: '',
          confirmPassword: '',
          error: '',
          success: true
        });
      }
    });
  };

  //Show error
  const showError = () => (
    <div
      className='alert alert-danger'
      style={{ display: error ? '' : 'none' }}
    >
      {error}
    </div>
  );
  //Show Success
  const showSuccess = () => (
    <div
      className='alert alert-info'
      style={{ display: success ? '' : 'none' }}
    >
      New Account is created. Please Signin.
    </div>
  );

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have account</h2>
      <span>Sign Up with your Email and Password</span>
      {showSuccess()}
      {showError()}
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='name'
          label='Display Name'
          handleChange={handleChange('name')}
          value={name}
        />
        <FormInput
          type='email'
          name='email'
          label='Email'
          handleChange={handleChange('email')}
          value={email}
        />
        <FormInput
          type='password'
          name='password'
          label='Password'
          handleChange={handleChange('password')}
          value={password}
        />
        <FormInput
          type='password'
          name='confirmPassword'
          label='Confirm Password'
          handleChange={handleChange('confirmPassword')}
          value={confirmPassword}
        />

        <CustomButton type='submit'>Sign Up</CustomButton>
      </form>
    </div>
  );
};

export default Signup;
