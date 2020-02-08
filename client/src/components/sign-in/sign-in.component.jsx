import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signin, authenticate, isAuthenticated } from '../../auth';

import './sign-in.styles.scss';

const SignIn = () => {
  //Use State
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    loading: false,
    redirectToReferrer: false
  });

  //destructuring state
  const { email, password, error, loading, redirectToReferrer } = values;
  const { user } = isAuthenticated();

  //Sign in form
  const signinForm = () => (
    <form onSubmit={handleSubmit}>
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
      <div className='buttons'>
        <CustomButton type='submit'>Sign in</CustomButton>
        <CustomButton isGoogleSignIn>Sign in Google</CustomButton>
      </div>
    </form>
  );

  //Handle Change method - higher order function
  const handleChange = name => event => {
    const { value } = event.target;

    setValues({ ...values, error: false, [name]: value });
  };

  //Handle submit
  const handleSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password }).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            redirectToReferrer: true
          });
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
  const showLoading = () =>
    loading && (
      <div className='alert alert-info'>
        <h2>Loading...</h2>
      </div>
    );

  //Redirect
  const redirectUser = () => {
    if (redirectToReferrer) {
      if (user && user.role === 1) {
        return <Redirect to='/admin/dashboard' />;
      } else {
        return <Redirect to='/user/dashboard' />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to='/' />;
    }
  };

  return (
    <div className='sign-in'>
      <h2 className='title'>I already have an account</h2>
      <span>Sign in with your email and password</span>
      {showLoading()}
      {showError()}
      {signinForm()}
      {redirectUser()}
    </div>
  );
};

export default SignIn;
