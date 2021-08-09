import React from 'react';
import { Product } from './Product';
import '../styles/components/Products.scss';

const Products = ({ produce }) => {
  return (
    <div className="Products">
      <div className="Products-items">
        {produce.map((item) => (
          <Product key={item.id} items={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
