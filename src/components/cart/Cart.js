import React from "react";
import Cartitem from "./CartItem";
import classes from "./Cart.module.css";


export default function Cart(props) {
    
    function closeButtonClickHandler() {
        props.onClick()
    }
 
  return (
    <div className={classes.cartBackDrop}>
      <div className={classes.cartContainer}>
        <Cartitem />
        <Cartitem />
        <Cartitem />
        <div className={classes.cartSummary}>
          <div className={classes.totalAmount}>
            <span className={classes.labelName}>Total Amount</span>
            <span className={classes.labelName}>&#8377;2000</span>
          </div>
          <div className={classes.buttonContainer}>
            <button
              onClick={closeButtonClickHandler}
              className={classes.button}
            >
              Close
            </button>
            <button className={classes.button}>Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}
