import { FunctionComponent } from "react"
import classes from './footer.module.scss'

export const Footer:FunctionComponent = () => {
  return (
    <div className={classes.main}>
        <p>Design by victor kyalo<span>@2024</span></p>
    </div>
  )
}
