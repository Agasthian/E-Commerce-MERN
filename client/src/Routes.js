import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/home/Home';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Navbar from './components/navigation/navbar';
import Signup from './user/Signup';

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/home' exact component={Home} />
        <Route path='/signin' exact component={SignInAndSignUp} />
        <Route path='/signup' exact component={Signup} />
      </Switch>
    </Router>
  );
};

export default Routes;
