import  { FunctionComponent } from 'react'
 import classes from './currency-format.module.scss'
interface Props{
    amount:number
}
export const CurrencyFormat:FunctionComponent<Props> = ({amount}) => {
  const formattedAmount= amount.toLocaleString('en-GB',{
    style:'currency',
    currency:'GBP'
  })
  
    return (
    <span className={classes.currency}>
{formattedAmount}
    </span>
  )
}
