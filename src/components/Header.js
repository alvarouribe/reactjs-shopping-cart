import React from 'react';

export default function Header(props) {
  const { countCartItems } = props;

  return (
    <header className="row block center">
      <div>
        <h1>Shopping cart</h1>
      </div>
      <div>
        <span>
        Cart { ' ' }
        { countCartItems ? (
          <button className="badge">{ countCartItems }</button>
        ) : ( ' ' ) }
        </span>{ ' ' }
      </div>
    </header>
  );
}
