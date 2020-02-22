import { API } from '../config';

/**
 * Fetch Products to display on Home Page
 */
export const getProducts = async sortBy => {
  const res = await fetch(
    `${API}/products?sortBy=${sortBy}&order=desc&limit=6`,
    {
      method: 'GET'
    }
  );
  const json = await res.json();
  return json;
};

/**
 * Fetch categories
 */

export const getCategories = async () => {
  const res = await fetch(`${API}/categories`, {
    method: 'GET'
  });
  const json = await res.json();
  return json;
};

/**
 * Retrive Filter products- post method- Used in Shop page
 */

export const getFilteredProducts = (skip, limit, filters = {}) => {
  const data = { skip, limit, filters };

  return fetch(`${API}/products/by/search`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};
