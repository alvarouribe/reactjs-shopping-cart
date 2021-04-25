import React from 'react';
import Product from './Product';

export default function Main(props) {
  const { products, onAdd } = props;

  const productsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }

  return (
    <main className="block col-2">
      <h2 class="text-center">Products</h2>

      <div style={ productsStyle } className="row">
        {products.map((product, index) => (
          <Product key={index} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}
