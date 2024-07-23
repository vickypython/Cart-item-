import { FunctionComponent } from "react";
import classes from './header/module.scss'
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";

export const Header:FunctionComponent = () => {
  return (
    <header className={classes.header}>
        <div>
<Link to='/'>
<img src={logo} alt="shopping cart" className={classes.logo} />
</Link>
</div>
<div>
    <CartWidget productsCount={productscount}/>
</div>
    </header>
  )
}
