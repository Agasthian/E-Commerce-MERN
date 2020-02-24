import React, { useState, useEffect } from 'react';

import { getProducts } from '../../api/apiCore';

import Layout from '../../components/layout/Layout';
import Card from '../../components/product-card/card.components';
import SearchBar from '../../components/search-bar/searchBar';

import { PageHeading } from '../../utils/utils';
import { CardPreview } from './Home.styles';

const Home = () => {
  //State
  const [productsBySold, setProductsBySold] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);

  //Load Product by sold
  const loadProductsBySold = async () => {
    const data = await getProducts('sold');
    setProductsBySold(data);
  };

  //Load Product by Arrival
  const loadProductsByArrival = async () => {
    const data = await getProducts('createdAt');
    setProductsByArrival(data);
  };

  //Life cycle - use Effect
  useEffect(() => {
    loadProductsByArrival();
    loadProductsBySold();
  }, []);

  return (
    <Layout>
      <PageHeading>Home page</PageHeading>
      <SearchBar />
      <h3>New Arrival</h3>
      <CardPreview>
        {productsByArrival
          .filter((product, index) => index < 4)
          .map((product, i) => (
            <Card key={i} product={product} />
          ))}
      </CardPreview>
      <hr />

      <h3>Best Seller</h3>
      <CardPreview>
        {productsBySold
          .filter((product, index) => index < 4)
          .map((product, i) => (
            <Card key={i} product={product} />
          ))}
      </CardPreview>
    </Layout>
  );
};

export default Home;
