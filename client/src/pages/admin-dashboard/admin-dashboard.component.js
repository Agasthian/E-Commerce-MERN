import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../components/layout/Layout';
import { isAuthenticated } from '../../auth';

import { DashboardWrapper, Greeting } from './admin-dashboard.style';
import { PageHeading } from '../../utils/utils';

const AdminDashboard = () => {
  const {
    user: { _id, name, email, role }
  } = isAuthenticated();

  const adminLink = () => {
    return (
      <div className='card'>
        <h3 className='card-header'>User Links</h3>
        <ul className='list-group'>
          <li className='list-group-item'>
            <Link className='nav-link' to='/create/catogory'>
              Create Category
            </Link>
          </li>
          <li className='list-group-item'>
            <Link className='nav-link' to='/create/product'>
              Create Product
            </Link>
          </li>
        </ul>
      </div>
    );
  };
  const adminInfo = () => {
    return (
      <div className='card mb-5'>
        <h3 className='card-header'>User Information</h3>
        <ul className='list-group'>
          <li className='list-group-item'>Name: {name}</li>
          <li className='list-group-item'>Email : {email}</li>
          <li className='list-group-item'>
            Role : {role === 1 ? 'Admin' : 'Registered User'}
          </li>
        </ul>
      </div>
    );
  };

  return (
    <Layout>
      <DashboardWrapper>
        <PageHeading>Admin Dashboard</PageHeading>
        <Greeting>G'day {name}</Greeting>
        <div className='row'>
          <div className='col-md-3'>{adminLink()}</div>
          <div className='col-md-9'>{adminInfo()}</div>
        </div>
      </DashboardWrapper>
    </Layout>
  );
};

export default AdminDashboard;
