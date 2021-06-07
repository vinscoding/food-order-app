import React, { Fragment, useContext } from "react";
import cartContext from "../../store/cart-context";
import cart from "./../../assets/shopping-cart.svg";
import classes from "./HeaderCartButton.module.css";

export default function Headercartbutton(props) {
  const { addedItem } = useContext(cartContext);
  const numOfCartItems = addedItem.reduce(
    (acc, item) => acc + +item.quantity,
    0
  );

  function cartButtonClickHandler() {
    props.onClick();
  }
  return (
    <button
      className={`${classes.cartButton} ${1 && classes.scale}`}
      onClick={cartButtonClickHandler}
    >
      <img src={cart}></img>
      <span>Your Cart</span>
      <span className={classes.numCartItem}>{numOfCartItems}</span>
    </button>
  );
}
