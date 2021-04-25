import React from 'react';

export default function Header(props) {
  const { countCartItems } = props;

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const badgeStyle = {
    backgroundColor: 'rgba(142, 137, 219, 1)',
    border: 'none',
    color: 'white',
    width: '1.5rem',
    borderRadius: '3rem',
    textAlign: 'center',
  }

  return (
    <header style={ headerStyle } className="block">
      <div>
        <h1>MVM Shopping cart</h1>
      </div>
      <div>
        <span>
        Cart { ' ' }
        { countCartItems ? (
          <button style={ badgeStyle }>{ countCartItems }</button>
        ) : ( ' ' ) }
        </span>{ ' ' }
      </div>
    </header>
  );
}
