import { FunctionComponent } from "react"
import { useNavigate } from "react-router-dom"
import classes from './cart-widget.module.scss'
import shoppingCart from '../../assets/shoppingcart.svg'
interface Props{
    productsCount:number
}
export const CartWidget:FunctionComponent<Props> = ({productsCount}) => {
 const navigate= useNavigate()
 const navigateToCart=()=>{
    navigate('/cart')
 }
    return (
    <button className={classes.container} onClick={navigateToCart}>
<span className={classes.productsCount}>{productsCount}</span>
<img src={shoppingCart} alt="Got to cart" className={classes.shoppingCart}  />

    </button>
  )
}
