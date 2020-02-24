import React, { useState, useEffect } from 'react';

import { getCategories, list } from '../../api/apiCore';
import Card from '../product-card/card.components';

import { CardPreview } from '../../pages/home/Home.styles';

const SearchBar = () => {
  //State
  const [data, setData] = useState({
    categories: [],
    category: '',
    search: '',
    results: [],
    searched: false
  });

  //destructing
  const { categories, category, search, results, searched } = data;

  //load Categories method

  const loadCategories = async () => {
    const data = await getCategories();
    setData({ ...data, categories: data });
  };

  // useEffect
  useEffect(() => {
    loadCategories();
  }, []);

  //search data
  const searchData = async () => {
    // console.log(search, category);
    if (search) {
      const response = await list({
        search: search || undefined,
        category: category
      });
      setData({ ...data, results: response, searched: true });
    }
  };

  //Search Submit
  const searchSubmit = e => {
    e.preventDefault();
    searchData();
  };

  //Handle Change
  const handleChange = name => event => {
    setData({ ...data, [name]: event.target.value, searched: false });
  };
  //Search Form
  const searchForm = () => (
    <form onSubmit={searchSubmit}>
      <span className='input-group-text'>
        <div className='input-group input-group-lg'>
          <div className='input-group-prepend'>
            <select onChange={handleChange('category')} className='btn mr-3'>
              <option value='All'>All</option>
              {categories.map((c, i) => (
                <option key={i} value={c._id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          <input
            type='search'
            className='form-control'
            onChange={handleChange('search')}
            placeholder='Search for products'
          />
        </div>
        <div className='btn input-group-append' style={{ border: 'none' }}>
          <button className='input-group-text'>Search</button>
        </div>
      </span>
    </form>
  );

  const searchedMessage = (searched, results) => {
    if (searched && results.length > 0) {
      return `Found ${results.length} products`;
    }
    if (searched && results.length < 1) {
      return `No products found`;
    }
  };

  //Searched Products - card result after search
  const searchedProducts = (results = []) => {
    return (
      <>
        <h2 className='mt-4 mb-4'>{searchedMessage(searched, results)}</h2>
        <CardPreview>
          {results.map((product, i) => (
            <Card key={i} product={product} />
          ))}
        </CardPreview>
      </>
    );
  };

  return (
    <div className='row'>
      <div className='container mb-3'>{searchForm()}</div>
      <div className='container mb-3'>{searchedProducts(results)}</div>
    </div>
  );
};

export default SearchBar;
