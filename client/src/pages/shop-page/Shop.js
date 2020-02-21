import React, { useState, useEffect } from 'react';

import { getCategories } from '../../api/apiCore';
import Layout from '../../components/layout/Layout';
import CheckBox from '../../components/check-box/check-box.components';

import { PageHeading } from '../../utils/utils';
import './shop.styles.scss';

const Shop = () => {
  //State
  const [myFilters, setMyFilters] = useState({
    filters: { category: [], price: [] }
  });
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);

  //load categories and set data
  const init = () => {
    getCategories().then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  //Life Cycle
  useEffect(() => {
    init();
  }, []);

  //Handle Filter method -
  const handleFilters = (filters, filterBy) => {
    // console.log('Shop', filters, filterBy);

    const newFilters = { ...myFilters };
    newFilters.filters[filterBy] = filters;
    setMyFilters(newFilters);
  };

  return (
    <Layout>
      <PageHeading>Shop page</PageHeading>
      <div className='shop-wrapper'>
        <div className='sidebar'>
          <h4>Filter by categories</h4>
          <ul>
            <CheckBox
              categories={categories}
              handleFilters={filters => handleFilters(filters, 'category')}
            />
          </ul>
        </div>
        <div className='products-wrapper'>{JSON.stringify(myFilters)}</div>
      </div>
    </Layout>
  );
};

export default Shop;
