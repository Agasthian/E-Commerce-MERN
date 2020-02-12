import React, { useState, useEffect } from 'react';

import { getProducts } from '../../api/apiCore';
import Layout from '../../components/layout/Layout';
import Card from '../../components/product-card/card.components';

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
      <h1>Home page</h1>
      <h3>New Arrival</h3>
      <div className='row'>
        {productsByArrival.map((product, i) => (
          <Card key={i} product={product} />
        ))}
      </div>
      <hr />

      <h3>Best Seller</h3>
      <div className='row'>
        {productsBySold.map((product, i) => (
          <Card key={i} product={product} />
        ))}
      </div>
      <hr />
    </Layout>
  );
};

export default Home;
