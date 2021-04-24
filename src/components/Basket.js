import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove, onRemoveAll } = props;

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const GST = itemsPrice * 0.15; // gst 15%
  const totalPrice = itemsPrice;

  return (
    <aside className="basket block col-1">
      <h2>Cart items</h2>

      <div>
        {cartItems.length === 0 && <div className="empty-cart">Cart is empty</div>}

        { cartItems.map((item) => (
          <div key={ item.id } className="row cart-item">

            <div className="col-2">
              { item.name } { ' ' }
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>

              <button onClick={() => onAdd(item)} className="add">
                +
              </button>

              <br/>
              ${ item.price.toFixed(2) } x { item.qty }
            </div>

            <div className="col-1">
              <div className="text-right">
                Total: ${ (item.price.toFixed(2) * item.qty).toFixed(2) }
                <button onClick={() => onRemoveAll(item)} className="remove-all">
                  X
                </button>
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