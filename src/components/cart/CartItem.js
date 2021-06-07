import React from "react";
import classes from './CartItem.module.css'

export default function Cartitem(props) {
  return (<div className={classes.cartItemConatiner}>
    <div className={classes.cartBar}>
      <div className={classes.cartMealsConatiner}>
        <span className={classes.labelName}>hjgj{props.name}</span>
        <div className={classes.priceQuantityContainer}>
          <span className={classes.price}>jjhg{props.price}</span>
          <div className={classes.quantity}>x{props.quantity}</div>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <button className={classes.add}>-</button>
        <button className={classes.add}>+</button>
          </div>
      </div>
        <div className={classes.line}></div></div>
  );
}
