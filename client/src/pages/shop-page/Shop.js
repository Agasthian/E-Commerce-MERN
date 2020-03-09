import React, { useState, useEffect } from 'react';

import { getCategories, getFilteredProducts } from '../../api/apiCore';
import CheckBox from '../../components/filter-check-box/check-box.components';
import RadioButton from '../../components/filter-radio-button/radio-button.components';
import Card from '../../components/product-card/card.components';
import { prices } from '../../components/filter-price/fixedPrice';
import BreadCrumbs from '../../components/bread-crumbs/breadcrumbs';

import { Container } from '../../utils/utils';
import { CardPreview } from '../home/Home.styles';
import {
  ShopPageWrapper,
  SideBar,
  Products,
  SideBarHeading
} from './Shop.styles';

const Shop = () => {
  //State
  const [myFilters, setMyFilters] = useState({
    filters: { category: [], price: [] }
  });
  const [categories, setCategories] = useState([]);
  const [limit, setLimit] = useState(6);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(0);
  const [filteredResults, setFilteredResults] = useState([]);

  //load categories and set data
  const init = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  //Load Filtered Results method
  const loadFilteredResults = async newFilters => {
    //console.log(newFilters);
    const data = await getFilteredProducts(skip, limit, newFilters);
    setFilteredResults(data.data);
    setSize(data.size);
    setSkip(0);
  };
  //Load more Filtered Results
  const loadMore = async () => {
    let toSkip = skip + limit;
    const data = await getFilteredProducts(toSkip, limit, myFilters.filters);
    setFilteredResults([...filteredResults, ...data.data]);
    setSize(data.size);
    setSkip(toSkip);
  };
  //Load More button
  const loadMoreButton = () => {
    return (
      size > 0 &&
      size >= limit && (
        <button onClick={loadMore} className='btn btn-warning mb-5'>
          Load More
        </button>
      )
    );
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
    <>
      <BreadCrumbs url={`/shop`} name={'Shop Page'} />
      <Container>
        <ShopPageWrapper>
          <SideBar>
            <SideBarHeading>Filter</SideBarHeading>
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
          </SideBar>
          <Products>
            <h2 className='mb-4'>Products</h2>
            <CardPreview>
              {filteredResults.map((product, i) => (
                <Card key={i} product={product} />
              ))}
            </CardPreview>
            <hr />
            {loadMoreButton()}
          </Products>
        </ShopPageWrapper>
      </Container>
    </>
  );
};

export default Shop;
