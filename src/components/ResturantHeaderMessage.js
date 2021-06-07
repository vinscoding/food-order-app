import React from "react";
import classes from "./ResturantHeaderMessage.module.css";

export default function Resturantheadermessage() {
  return (
    <div className={classes.resturantMessageContainer}>
      <div className={classes.resturantMessage}>
        <h2>Delicious! Food, Delivered To You</h2>
        <p className={classes.resturantMessage2}>
          Choose your favorite meals, and enjoy the taste at home
        </p>
        <p className={classes.resturantMessage2}>
          Our meals are cooked with high quality ingridients, If you don’t lick
          your fingers, enjoy only half
        </p>
      </div>
    </div>
  );
}
