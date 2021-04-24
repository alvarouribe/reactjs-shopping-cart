import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;

  return (
    <div className="card">
      <h3>{ product.name }</h3>

      <div className="text-right">${ product.price.toFixed(2) }</div>

      <div>
        <button className="add-to-cart highlight" onClick={() => onAdd(product)}>Add to cart</button>
      </div>
    </div>
  );
}
