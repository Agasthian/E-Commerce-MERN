import React, { useState, useEffect } from 'react';

import { getProducts } from '../../api/apiCore';
import Layout from '../../components/layout/Layout';
import Card from '../../components/product-card/card.components';

import { PageHeading } from '../../utils/utils';
import { CardPreview } from './home.styles';

const Home = () => {
  //State
  const [productsBySold, setProductsBySold] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);
  const [error, setError] = useState(false);

  //Load Product by sold
  const loadProductsBySold = () => {
    getProducts('sold').then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsBySold(data);
      }
    });
  };
  //Load Product by Arrival
  const loadProductsByArrival = () => {
    getProducts('createdAt').then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsByArrival(data);
      }
    });
  };

  //Life cycle - use Effect
  useEffect(() => {
    loadProductsByArrival();
    loadProductsBySold();
  }, []);

  return (
    <Layout>
      <PageHeading>Home page</PageHeading>
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
