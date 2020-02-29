import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/home/Home';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Dashboard from './pages/user-dashboard/user-dashboard';
import AdminDashboard from './pages/admin-dashboard/admin-dashboard.component';
import Shop from './pages/shop-page/Shop';
import ProductPage from './pages/product-page/product-page.components';
import CheckoutPage from './pages/checkout-page/checkout-page';

import Navbar from './components/navigation/navbar';
import AddCategory from './components/add-category/add-category.components';
import AddProduct from './components/add-product/add-product.components';

import PrivateRoute from './auth/PrivateRoute';
import AdminRoute from './auth/AdminRoute';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowLeft,
  faArrowRight,
  faHome,
  faCalendar,
  faPoll,
  faHeart,
  faDotCircle,
  faStar as fasFaStar,
  faSearch,
  faChevronRight,
  faChevronLeft,
  faLink,
  faPlay,
  faShoppingCart,
  faBookmark
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons';

library.add(
  fab,
  faArrowLeft,
  faArrowRight,
  faHome,
  faCalendar,
  faPoll,
  faHeart,
  faDotCircle,
  fasFaStar,
  farFaStar,
  faSearch,
  faChevronRight,
  faChevronLeft,
  faLink,
  faPlay,
  faShoppingCart,
  faBookmark
);

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home' exact component={Home} />
          <Route path='/shop' exact component={Shop} />
          <Route path='/signin' exact component={SignInAndSignUp} />
          <PrivateRoute path='/user/dashboard' exact component={Dashboard} />
          <AdminRoute
            path='/admin/dashboard'
            exact
            component={AdminDashboard}
          />
          <AdminRoute path='/create/category' exact component={AddCategory} />
          <AdminRoute path='/create/product' exact component={AddProduct} />
          <Route path='/product/:productId' exact component={ProductPage} />
          <Route path='/checkout' exact component={CheckoutPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
