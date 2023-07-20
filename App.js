import {  useState } from "react";
import Header from "./Components/finall-resturant-main/Header";
import Meals from './Components/finall-resturant-main/Meals'
import Cart from './Components/finall-resturant-main/Cart';
import CartProvider from "./Components/finall-resturant-main/CartProvider";
function App() {
  const [cartIsshown, setCartIsshown] = useState(false);

  const shownChangeHandler = () => {
    setCartIsshown(true);
  };
  const hideChangeHandler = () => {
    setCartIsshown(false);
  };
  return (
    <CartProvider>
      {cartIsshown && <Cart onClose={hideChangeHandler} />}

      <Header onshowCart={shownChangeHandler} />

      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
