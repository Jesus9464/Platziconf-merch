import React from 'react';

export const Product = ({ items }) => {
  console.log(items);
  return (
    <div className="Products-item">
      <img src={items.image} alt={items.title} />
      <div className="Product-item-info">
        <h2>
          {items.title}

          <span>$ {items.price}</span>
        </h2>
        <p>{items.description}</p>
      </div>
      <button type="button">Comprar</button>
    </div>
  );
};
