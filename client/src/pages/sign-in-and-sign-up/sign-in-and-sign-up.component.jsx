import React from 'react';

import Layout from '../../components/layout/Layout';
import SignIn from '../../components/sign-in/sign-in.component';
import Signup from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUp = () => (
  <Layout>
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <Signup />
    </div>
  </Layout>
);

export default SignInAndSignUp;
