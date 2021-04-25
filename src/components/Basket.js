import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove, onRemoveAll } = props;

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const totalPrice = itemsPrice;
  // For GST coment last line and uncomment the following
  // const GST = itemsPrice * 0.15;
  // const totalPrice = itemsPrice + GST;

  const basketStyle = {
    backgroundColor: '#fafafa',
    minWidth: '14rem',
    padding: '1rem',
    margin: '0.5rem',
    borderRadius: '0.5rem',
    flex: 1,
  }
  const addStyle = {
    backgroundColor: 'rgba(142, 137, 219, .4)',
    width: '1.5rem',
  }
  const removeStyle = {
    backgroundColor: 'rgba(142, 137, 219, .6)',
    width: '1.5rem',
  }
  const removeAllStyle = {
    textDecoration: 'underline',
  }
  const emptyCartStyle = {
    margin: '0.5rem',
  }

  const cartItemStyle = {
    marginBottom: '1rem',
    marginLeft: '0.5rem',
  }

  const cartQtyStyle = {
    width: '1.2rem',
    display: 'inline-block',
    textAlign: 'center',
  }

  const cartControlsStyle = {
    display: 'inline',
    float: 'right',
  }

  return (
    <aside style={ basketStyle }>
      <h2>Cart items</h2>

      <div>
        {cartItems.length === 0 && <div style={ emptyCartStyle }>Cart is empty</div>}

        { cartItems.map((item) => (
          <div key={ item.id } style={ cartItemStyle } className="row">

            <div className="col-2">
              { item.name } { ' ' }

              <div style={ cartControlsStyle }>
                <button onClick={() => onRemove(item)} style={ removeStyle }>-</button>
                <span style={ cartQtyStyle }>{ item.qty }</span>
                <button onClick={() => onAdd(item)} style={ addStyle }>+</button>
              </div>

              <br/>
              ${ item.price.toFixed(2) }
            </div>

            <div className="col-1">
              <div className="text-right">
                Total:
                <br/>
                ${ (item.price.toFixed(2) * item.qty).toFixed(2) }
                <br/>
                <a href="/#" onClick={() => onRemoveAll(item)} style={ removeAllStyle }>
                  Remove
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {cartItems.length !== 0 && (
        <>
          <hr/>

          <div className="row">
            <div className="col-2"><strong>Total Price</strong></div>
            <div className="col-1 text-right">${totalPrice.toFixed(2)}</div>
          </div>

          <hr/>
          <div className="row">
            <button onClick={() => alert('TODO: Implement checkout')}>
              Checkout
            </button>
          </div>
        </>
      )}
    </aside>
  );
}