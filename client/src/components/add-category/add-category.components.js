import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { isAuthenticated } from '../../auth';
import { createCategory } from '../../api/apiAdmin';

import Layout from '../layout/Layout';
import { PageHeading, Center } from '../../utils/utils';

import { Wrapper } from './add-catgory.styles';

const AddCategory = () => {
  const [values, setValues] = useState({
    name: '',
    error: false,
    success: false
  });

  //Destructuring user and token from isAuthenticated
  const { user, token } = isAuthenticated();
  const { name, success, error } = values;

  // New Category Form
  const newCategoryForm = () => (
    <form onSubmit={handleSubmit}>
      <FormInput
        type='text'
        name='name'
        label='Category'
        handleChange={handleChange('name')}
        value={name}
        required
      />
      <div className='buttons'>
        <CustomButton type='submit'>Create Category</CustomButton>
      </div>
    </form>
  );

  // Handle Submit
  const handleSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false, success: false });

    //make requet to API - calling create category function
    console.log(user._id, token, { name });
    createCategory(user._id, token, { name }).then(data => {
      if (data.error) {
        setValues({ ...values, error: true });
      } else {
        setValues({ ...values, error: false, success: true });
      }
    });
  };

  //Handle Change method - higher order function
  const handleChange = category => event => {
    const { value } = event.target;
    setValues({ ...values, error: '', [category]: value });
  };

  //show Success
  const showSuccess = () => {
    if (success) {
      return <h3 className='text-success'>{name} is created</h3>;
    }
  };

  //show Error
  const showError = () => {
    if (error) {
      return <h3 className='text-danger'>Category should be unique</h3>;
    }
  };
  //Go Back
  const goBack = () => {
    return (
      <div className='mt-5'>
        <Link to='/admin/dashboard' className='text-warning'>
          Back To dashboard
        </Link>
      </div>
    );
  };

  return (
    <Layout>
      <Center>
        <Wrapper>
          <PageHeading>Add Category</PageHeading>
          {showSuccess()}
          {showError()}
          {newCategoryForm()}
          {goBack()}
        </Wrapper>
      </Center>
    </Layout>
  );
};
export default AddCategory;
