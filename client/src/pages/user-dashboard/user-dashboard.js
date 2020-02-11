import React from 'react';
import { Link } from 'react-router-dom';

import { isAuthenticated } from '../../auth';

import Layout from '../../components/layout/Layout';
import { PageHeading } from '../../utils/utils';
import { DashboardWrapper, Greeting } from './user-dashboard.styles';

const Dashboard = () => {
  const {
    user: { name, email, role }
  } = isAuthenticated();

  const userLink = () => {
    return (
      <div className='card'>
        <h3 className='card-header'>User Links</h3>
        <ul className='list-group'>
          <li className='list-group-item'>
            <Link className='nav-link' to='/cart'>
              My cart
            </Link>
          </li>
          <li className='list-group-item'>
            <Link className='nav-link' to='/profile/update'>
              Update Profile
            </Link>
          </li>
        </ul>
      </div>
    );
  };
  const userInfo = () => {
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

  const purchaseHistory = () => {
    return (
      <div className='card mb-5'>
        <div className='card-header'>Purchase history</div>
        <ul className='list-group'>
          <li className='list-group-item'>History</li>
        </ul>
      </div>
    );
  };
  return (
    <Layout>
      <DashboardWrapper>
        <PageHeading>User Dashboard</PageHeading>
        <Greeting>G'day {name}</Greeting>
        <div className='row'>
          <div className='col-md-3'>{userLink()}</div>
          <div className='col-md-9'>
            {userInfo()}
            {purchaseHistory()}
          </div>
        </div>
      </DashboardWrapper>
    </Layout>
  );
};

export default Dashboard;
