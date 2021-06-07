import React, { useContext } from "react";
import cartContext from "../../store/cart-context";
import classes from "./CartItem.module.css";

export default function Cartitem(props) {
  const cartCtx = useContext(cartContext);

  function removeClickHandler() {
    cartCtx.removeItems(props.id);
  }

  function addClickHandler() {
    cartCtx.addItems({
      id: props.id,
      name: props.name,
      price: props.price,
      quantity: 1,
    });
  }
  return (
    <div className={classes.cartItemConatiner}>
      <div className={classes.cartBar}>
        <div className={classes.cartMealsConatiner}>
          <span className={classes.labelName}>{props.name}</span>
          <div className={classes.priceQuantityContainer}>
            <span className={classes.price}>{props.price}</span>
            <div className={classes.quantity}>x{props.quantity}</div>
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <button onClick={removeClickHandler} className={classes.add}>
            -
          </button>
          <button onClick={addClickHandler} className={classes.add}>
            +
          </button>
        </div>
      </div>
      <div className={classes.line}></div>
    </div>
  );
}
