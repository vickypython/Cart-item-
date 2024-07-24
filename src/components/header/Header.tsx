import { FunctionComponent } from "react"
import classes from './header/module.scss'
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import logo from '../../assets/react.svg' //need some change
import { CartProps } from "../Products/Products";

export const Header: FunctionComponent = () => {
 const [cart]=uselocalstorage<CartProps>('cart',{})
  const productsCount:number= Object.keys(cart || {}).length
  
  return (
    <header className={classes.headers}>
      <div>
        <Link to='/'>
          <img src={logo} alt="shopping cart" className={classes.logo} />
        </Link>
      </div>
      <div>
        <CartWidget productsCount={productsCount} />
      </div>
    </header>
  )
}
