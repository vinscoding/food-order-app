import { useState } from "react";
import "./App.css";
import Cart from "./components/cart/Cart";
import { Header } from "./components/header/Header";
import Meals from "./components/meals/Meals";
import Resturantheadermessage from "./components/ResturantHeaderMessage";
import Modal from "./components/UI/Modal";
import Cartcontextprovider from "./store/CartContextProvider";

function App() {
  const [showCart, setShowCart] = useState(false);
  function showCartHandler() {
    setShowCart(true);
  }
  function hideCartHandler() {
    setShowCart(false);
  }
  return (
    <Cartcontextprovider>
      {showCart && (
        <Modal>
          <Cart onClick={hideCartHandler} />
        </Modal>
      )}
      <Header onClick={showCartHandler}></Header>
      <Resturantheadermessage />
      <Meals></Meals>
    </Cartcontextprovider>
  );
}

export default App;
