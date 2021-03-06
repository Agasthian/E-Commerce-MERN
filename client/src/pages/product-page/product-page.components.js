import React, { useState, useEffect } from 'react';

import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { read, listRelated } from '../../api/apiCore';

import Header from '../../components/header/Header';
import DisplayImage from '../../components/display-image/displayImage';
import Rating from '../../components/rating/ratings';

import Loading from '../../components/loading/loading';
import Button from '../../components/button/button';
import NotFound from '../../components/not-found/notFound';
import BreadCrumbs from '../../components/bread-crumbs/breadcrumbs';
import Card from '../../components/product-card/card.components';
import AddToCartBtn from '../../components/add-to-cart-button/add-to-cart-button';
import { Container } from '../../utils/utils';

import {
  Wrapper,
  ProductWrapper,
  ProductDetails,
  ImageWrapper,
  HeaderWrapper,
  Heading,
  DetailsWrapper,
  RatingsWrapper,
  RatingNumber,
  ImgLoading,
  Info,
  StyledText,
  Text,
  ButtonsWrapper,
  LeftButtons,
  StockBtn
} from './product-page.styles';
import { CardPreview } from '../home/Home.styles';

const ProductPage = (props, addItem) => {
  //State
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [currentURL, setcurrentURL] = useState();

  //Destructuring
  const { name, description, price, category, quantity, _id } = product;

  //load product using product ID
  const loadSingleProduct = async productId => {
    const data = await read(productId);
    setProduct(data);

    //fetch related products
    const relatedData = await listRelated(data._id);
    setRelatedProduct(relatedData);
    setLoaded(true);
  };

  //useEffect
  useEffect(() => {
    const productId = props.match.params.productId; // product id is got using react router dom from URL
    setcurrentURL(productId);
    loadSingleProduct(productId);
  }, [props]);

  //Show Stock
  const displayStock = quantity => {
    return quantity > 0 ? (
      <StockBtn solid={1}>In Stock</StockBtn>
    ) : (
      <StockBtn solid={0}>Out of Stock</StockBtn>
    );
  };

  // Render recommended products
  const renderRecommended = relatedProduct => {
    return (
      <>
        {!loaded ? (
          <NotFound
            title='Sorry!'
            subtitle={`There are no recommended products...`}
          />
        ) : (
          <>
            {relatedProduct.map((product, i) => (
              <Card key={i} product={product} />
            ))}
          </>
        )}
      </>
    );
  };

  return (
    <>
      <BreadCrumbs
        url={`/product/${currentURL}`}
        currentPage={'Product'}
        name={name}
      />
      <Container>
        <Wrapper>
          <Helmet>
            <title>{`${name} - Civil Box`}</title>
          </Helmet>
          <ProductWrapper>
            {!loaded ? (
              <ImgLoading>
                <Loading />
              </ImgLoading>
            ) : null}
            <ImageWrapper style={!loaded ? { display: 'none' } : {}}>
              <DisplayImage item={product} url='product' />
            </ImageWrapper>
            <ProductDetails>
              <HeaderWrapper>
                <Header size='2' title={name} />
              </HeaderWrapper>
              <DetailsWrapper>
                <RatingsWrapper>
                  <Rating number={7.5 / 2} />
                  <RatingNumber>{7.5}</RatingNumber>
                </RatingsWrapper>
                <Info>Location : Adyar</Info>
              </DetailsWrapper>
              <Heading>Category</Heading>
              <StyledText>
                <FontAwesomeIcon
                  icon='dot-circle'
                  size='1x'
                  style={{ marginRight: '5px' }}
                />
                {category}
              </StyledText>
              <hr />
              <Heading>Quantity</Heading>
              <StyledText>
                <FontAwesomeIcon
                  icon='dot-circle'
                  size='1x'
                  style={{ marginRight: '5px' }}
                />
                {quantity}
              </StyledText>
              {displayStock(quantity)}
              <hr />
              <Heading>Product Description</Heading>
              <Text>
                {product &&
                  product.description &&
                  product.description.substring(0, 200)}
              </Text>
              <hr />
              <Heading>Price</Heading>
              <Text>Rs. {price}/-</Text>
              <ButtonsWrapper>
                <LeftButtons>
                  <Button title='Save for later' icon='bookmark' to='/' />
                  <AddToCartBtn product={product} />
                </LeftButtons>
              </ButtonsWrapper>
            </ProductDetails>
          </ProductWrapper>
          <Header title='Recommended' subtitle='products' />
          <CardPreview>{renderRecommended(relatedProduct)}</CardPreview>
        </Wrapper>
      </Container>
    </>
  );
};

export default ProductPage;
