import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import { useState } from 'react';

function App() {
  // import data
  const { products } = data;
  // state
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((item) => item.name === product.name);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.name === product.name ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((item) => item.name === product.name);

    if (exist.qty === 1) {
      // if the product exist once remove it from the cart
      setCartItems(cartItems.filter((item) => item.name !== product.name));
    } else {
      // if the product exist more than once decrease the qty
      setCartItems(
        cartItems.map((item) =>
          item.name === product.name ? { ...exist, qty: exist.qty - 1 } : item
        )
      );
    }
  };

  const onRemoveAll = (product) => {
    const exist = cartItems.find((item) => item.name === product.name);

    if (exist.qty > 0) {
      setCartItems(cartItems.filter((item) => item.name !== product.name));
    }
  };

  return (
    <div className="App">
      <Header countCartItems={cartItems.length}></Header>
      <div className='row'>
        <Main products={ products } onAdd={ onAdd } onRemove={ onRemove }></Main>
        <Basket cartItems={ cartItems } onAdd={ onAdd } onRemove={ onRemove } onRemoveAll={ onRemoveAll }></Basket>
      </div>
    </div>
  );
}

export default App;
