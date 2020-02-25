import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { read } from '../../api/apiCore';

import Layout from '../../components/layout/Layout';
import DisplayImage from '../../components/display-image/displayImage';
import Header from '../../components/header/Header';

import {
  Wrapper,
  ProductWrapper,
  ProductDetails,
  ImageWrapper,
  HeaderWrapper,
  Heading
} from './product-page.styles';

const ProductPage = props => {
  //State
  const [product, setProduct] = useState({});

  //load product using product ID
  const loadSingleProduct = async productId => {
    const data = await read(productId);
    setProduct(data);
  };

  //useEffect
  useEffect(() => {
    const productId = props.match.params.productId; // product id is got using react router dom from URL

    loadSingleProduct(productId);
  }, []);

  //Destructuring
  const { name, description, price, category, quantity, _id } = product;

  return (
    <Layout>
      <Wrapper>
        <Helmet>
          <title>{`${name} - Civil Box`}</title>
        </Helmet>
        <ProductWrapper>
          <ImageWrapper>
            <DisplayImage item={product} url='product' />
          </ImageWrapper>
          <ProductDetails>
            <HeaderWrapper>
              <Header size='2' title={name} subtitle='Test' />
            </HeaderWrapper>
          </ProductDetails>
        </ProductWrapper>

        {JSON.stringify(product)}
      </Wrapper>
    </Layout>
  );
};

export default ProductPage;
