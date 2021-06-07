import React, { Fragment } from 'react'
import cart from './../../assets/shopping-cart.svg'
import classes from './HeaderCartButton.module.css'

export default function Headercartbutton(props) {
    function cartButtonClickHandler() {
        props.onClick();
    }

    return (
        <button className={classes.cartButton} onClick={cartButtonClickHandler} >
            <img src={cart}></img>
            <span>Your Cart</span>
            <span className={classes.numCartItem}>{3 }</span>
            </button>
    )
}
