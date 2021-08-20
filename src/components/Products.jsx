import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContex';
import { Product } from './Product';
import '../styles/components/Products.scss';

const Products = () => {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  const handleAddToCart = (item) => () => {
    addToCart(item);
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((item) => (
          <Product
            key={item.id}
            item={item}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
