import React from 'react';

export default function Header(props) {
  const { countCartItems } = props;

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    margin: '0.5rem',
    borderRadius: '0.5rem',
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
    <header style={ headerStyle }>
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
