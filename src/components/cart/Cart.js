import React, { useContext } from "react";
import Cartitem from "./CartItem";
import classes from "./Cart.module.css";
import cartContext from "../../store/cart-context";

export default function Cart(props) {
  const { addedItem } = useContext(cartContext);
  const totalPrice = addedItem.reduce(
    (acc, item) => acc + +item.price * +item.quantity,
    0
  );

  function closeButtonClickHandler() {
    props.onClick();
  }

  return (
    <div className={classes.cartBackDrop}>
      <div className={classes.cartContainer}>
        {addedItem.map((item) => (
          <Cartitem
            id={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
          />
        ))}

        <div className={classes.cartSummary}>
          <div className={classes.totalAmount}>
            <span className={classes.labelName}>Total Amount</span>
            <span className={classes.labelName}>&#8377;{totalPrice}</span>
          </div>
          <div className={classes.buttonContainer}>
            <button
              onClick={closeButtonClickHandler}
              className={classes.button}
            >
              Close
            </button>
            {addedItem.length > 0 && (
              <button className={classes.button}>Order</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
