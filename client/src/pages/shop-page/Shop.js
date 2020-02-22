import React, { useState, useEffect } from 'react';

import { getCategories, getFilteredProducts } from '../../api/apiCore';
import Layout from '../../components/layout/Layout';
import CheckBox from '../../components/filter-check-box/check-box.components';
import RadioButton from '../../components/filter-radio-button/radio-button.components';
import Card from '../../components/product-card/card.components';
import { prices } from '../../components/filter-price/fixedPrice';

import { PageHeading } from '../../utils/utils';
import './shop.styles.scss';

const Shop = () => {
  //State
  const [myFilters, setMyFilters] = useState({
    filters: { category: [], price: [] }
  });
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const [limit, setLimit] = useState(6);
  const [skip, setSkip] = useState(0);
  const [filteredResults, setFilteredResults] = useState([]);

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

  //Load Filtered Results method
  const loadFilteredResults = newFilters => {
    // console.log(newFilters);
    getFilteredProducts(skip, limit, newFilters).then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setFilteredResults(data.data);
      }
    });
  };

  //Life Cycle
  useEffect(() => {
    init();
    loadFilteredResults(skip, limit, myFilters.filters);
  }, []);

  //Handle Filter method -
  const handleFilters = (filters, filterBy) => {
    // console.log('Shop', filters, filterBy);

    const newFilters = { ...myFilters };
    newFilters.filters[filterBy] = filters;

    //filter by price
    if (filterBy == 'price') {
      let priceValues = handlePrice(filters);
      newFilters.filters[filterBy] = priceValues;
    }
    loadFilteredResults(myFilters.filters);
    setMyFilters(newFilters);
  };

  //Handle Price method
  const handlePrice = value => {
    const data = prices;
    let array = [];

    for (let key in data) {
      if (data[key]._id === parseInt(value)) {
        array = data[key].array;
      }
    }
    return array;
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
          <h4>Filter by price range</h4>
          <div>
            <RadioButton
              prices={prices}
              handleFilters={filters => handleFilters(filters, 'price')}
            />
          </div>
        </div>
        <div className='products-wrapper'>
          <h2 className='mb-4'>Products</h2>
          <div className='card-preview'>
            {filteredResults.map((product, i) => (
              <Card key={i} product={product} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
