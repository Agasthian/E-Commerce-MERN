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
