import { Fragment } from 'react'
import food from '../../assets/food.jpg'
import classes from './Header.module.css'
import Headercartbutton from './HeaderCartButton'

export function Header(props) {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Foody</h1>
                <Headercartbutton onClick={ props.onClick}/>
            </header>
            <div className={classes.imgContainer}>
               
            </div>
        </Fragment>
    )
}
