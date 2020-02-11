import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  FormInput,
  FormInputPhoto,
  FormInputTextArea,
  FormInputSelect
} from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { isAuthenticated } from '../../auth';
import { createProduct, getCategories } from '../../api/apiAdmin';

import Layout from '../layout/Layout';
import { PageHeading, Center } from '../../utils/utils';

import { Wrapper } from './add-product.styles';

const AddProduct = () => {
  //State
  const [values, setValues] = useState({
    name: '',
    description: '',
    price: '',
    categories: [],
    category: '',
    shipping: '',
    quantity: '',
    loading: false,
    error: '',
    createdProduct: '',
    redirectToProfile: false,
    formData: ''
  });

  //Destructring
  const { user, token } = isAuthenticated();
  //State
  const {
    name,
    description,
    price,
    categories,
    category,
    shipping,
    quantity,
    loading,
    error,
    createdProduct,
    redirectToProfile,
    formData
  } = values;

  //load categories and set data
  const init = () => {
    getCategories().then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, categories: data, formData: new FormData() });
      }
    });
  };

  //Use Effect
  useEffect(() => {
    init();
  }, []);

  //Handle Submit
  const handleSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: '', loading: true });
    //calling create product fn with values from state
    createProduct(user._id, token, formData).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: '',
          description: '',
          photo: '',
          price: '',
          quantity: '',
          loading: false,
          createdProduct: data.name
        });
      }
    });
  };

  //Handle Change method - higher order function
  const handleChange = name => event => {
    const value = name === 'photo' ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  //Form
  const newPostForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='name'
          label='Product Name'
          handleChange={handleChange('name')}
          value={name}
          required
        />
        <FormInputTextArea
          type='textarea'
          name='description'
          label='Product Description'
          handleChange={handleChange('description')}
          value={description}
          required
        />
        <FormInput
          type='text'
          name='price'
          label='Price'
          handleChange={handleChange('price')}
          value={price}
          required
        />
        <FormInputSelect
          name='category'
          label='Select Category'
          handleChange={handleChange('category')}
          value={category}
          categories={categories}
          required
        />
        <FormInputSelect
          name='shipping'
          label='Select shipping'
          handleChange={handleChange('shipping')}
          value={shipping}
          option1='0'
          optionText1='No'
          option2='1'
          optionText2='Yes'
          required
        />

        <FormInput
          type='number'
          name='quantity'
          label='Quantity'
          handleChange={handleChange('quantity')}
          value={quantity}
          required
        />
        <FormInputPhoto
          type='file'
          name='photo'
          label='Add Product Photo'
          handleChange={handleChange('photo')}
        />
        <div className='buttons'>
          <CustomButton type='submit'>Create Category</CustomButton>
        </div>
      </form>
    );
  };

  //show Error
  const showError = () => {
    return (
      <div
        className='alert alert-danger'
        style={{ display: error ? '' : 'none' }}
      >
        {error}
      </div>
    );
  };

  //show Success
  const showSuccess = () => (
    <div
      className='alert alert-info'
      style={{ display: createdProduct ? '' : 'none' }}
    >
      <h2>Product {`${createdProduct}`} is created !</h2>
    </div>
  );

  //Show loading
  const showLoading = () =>
    loading && (
      <div className='alert alert-success'>
        <h2>Loading</h2>
      </div>
    );

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
          <PageHeading>Add Product</PageHeading>
          {showLoading()}
          {showSuccess()}
          {showError()}
          {newPostForm()}
          {goBack()}
        </Wrapper>
      </Center>
    </Layout>
  );
};

export default AddProduct;
