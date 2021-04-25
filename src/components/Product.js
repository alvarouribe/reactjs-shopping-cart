import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;

  const cardStyle = {
    display: 'flex',
    width: '80px',
    height: '94px',
    margin: '15px',
    boxShadow: '2px 6px 10px #dedddd',
    borderRadius: '20px',
    padding: '20px',
    flexDirection: 'column',
    alignItems: 'center',
  }

  const addToCartStyle = {
    marginTop: '10px',
  }

  return (
    <div style={ cardStyle }>
      <h3>{ product.name }</h3>

      <div className="text-right">${ product.price.toFixed(2) }</div>

      <div>
        <button style={ addToCartStyle } onClick={() => onAdd(product)}>Add to cart</button>
      </div>
    </div>
  );
}
