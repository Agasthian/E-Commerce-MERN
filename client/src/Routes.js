import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/home/Home';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Dashboard from './pages/user-dashboard/user-dashboard';
import AdminDashboard from './pages/admin-dashboard/admin-dashboard.component';

import Navbar from './components/navigation/navbar';
import AddCategory from './components/add-category/add-category.components';

import PrivateRoute from './auth/PrivateRoute';
import AdminRoute from './auth/AdminRoute';

const Routes = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/home' exact component={Home} />
        <Route path='/signin' exact component={SignInAndSignUp} />
        <PrivateRoute path='/user/dashboard' exact component={Dashboard} />
        <AdminRoute path='/admin/dashboard' exact component={AdminDashboard} />
        <AdminRoute path='/create/category' exact component={AddCategory} />
      </Switch>
    </Router>
  );
};

export default Routes;
