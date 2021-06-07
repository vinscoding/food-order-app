import React, { Fragment, useContext, useRef } from "react";
import cartContext from "../../store/cart-context";
import classes from "./MealBar.module.css";

export default function Mealbar(props) {
  const quantityRef = useRef();
  const cartCtx = useContext(cartContext);

  function formSubmitHandler(event) {
    event.preventDefault();
    cartCtx.addItems({
      id: props.id,
      name: props.name,
      price: props.price,
      quantity: quantityRef.current.value,
    });
  }
  return (
    <div className={classes.mealBarContainer}>
      <div className={classes.mealBar}>
        <div className={classes.aboutMeal}>
          <span className={classes.labelName}>{props.name}</span>
          <span className={classes.description}>{props.description}</span>
          <span className={classes.price}>&#8377;{props.price}</span>
        </div>
        <form className={classes.form} onSubmit={formSubmitHandler}>
          <div className={classes.inputContainer}>
            <label htmlFor="quantity" className={classes.label}>
              Quantity
            </label>
            <input
              type="number"
              min="1"
              max="10"
              step="1"
              defaultValue="1"
              name="quantity"
              className={classes.input}
              ref={quantityRef}
            />
          </div>
          <button type="submit" className={classes.button}>
            + Add
          </button>
        </form>
      </div>
      <div className={classes.line}></div>
    </div>
  );
}
