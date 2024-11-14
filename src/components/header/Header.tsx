import { FunctionComponent } from "react"
import classes from './header.module.scss'
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import logo from '../../assets/logo.svg' //need some change
import { CartProps } from "../Products/Products";
import useLocalStorageState from "use-local-storage-state";

export const Header: FunctionComponent = () => {
 const [cart]=useLocalStorageState<CartProps>('cart',{})
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
