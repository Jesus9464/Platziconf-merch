import React from 'react';

export const Product = ({ item, handleAddToCart }) => {
  return (
    <div className="Products-item">
      <img src={item.image} alt={item.title} />
      <div className="Product-item-info">
        <h2>
          {item.title}

          <span>$ {item.price}</span>
        </h2>
        <p>{item.description}</p>
      </div>
      <button type="button" onClick={handleAddToCart(item)}>
        Comprar
      </button>
    </div>
  );
};
