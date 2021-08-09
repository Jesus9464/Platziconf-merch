import React from 'react';
import initialState from '../initialState';
import Products from '../components/Products';

const Home = () => {
  return <Products produce={initialState.products} />;
};

export default Home;
