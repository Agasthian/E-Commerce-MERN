import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
// import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  // handleSubmit = async e => {
  //   e.preventDefault();

  //   const { email, password } = this.state;

  //   try {
  //     await auth.signInWithEmailAndPassword(email, password);
  //     this.setState({ email: '', password: '' });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // handleChange = e => {
  //   const { name, value } = e.target;
  //   this.setState({ [name]: value });
  // };

  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form>
          <FormInput
            type='email'
            name='email'
            label='Email'
            // handleChange={this.handleChange}
            value={this.state.email}
            required
          />
          <FormInput
            type='password'
            name='password'
            label='Password'
            // handleChange={this.handleChange}
            value={this.state.password}
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'>Sign in</CustomButton>
            <CustomButton isGoogleSignIn>Sign in Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
