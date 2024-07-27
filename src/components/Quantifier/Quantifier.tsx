import { FunctionComponent, useState } from "react"
import classs from './quantifier.module.scss'
export type Operation = 'decrease' | 'increase'
interface Props {
    removeProductCallback: (productId: number) => void
    handleUpdateQuality: (productId: number, operation: Operation) => void
    productId: number
}
export const Quantifier: FunctionComponent<Props> = ({ handleUpdateQuality, removeProductCallback, productId }) => {
    const [value, setValue] = useState<number>(1)

    const reduce = () => {
        handleUpdateQuality(productId, 'decrease')
        setValue(prevState => {
            const updatedValue = prevState - 1
            if (updatedValue === 0) {
                removeProductCallback(productId)
            }
            return updatedValue
        }

        )
    }

    const increase = (): void => {
        handleUpdateQuality(productId, 'increase')
        setValue(prevState => prevState + 1)

    }

    return (
        <div className={classs.quantifier}>

            <input type="button" value="-" className={classs.buttonMinus} onClick={reduce} />
            <input type="number" max="" step="1" className={classs.quantityField}
                value={value}
                onChange={(e) => setValue(parseInt(e.target.value))}
            />

            <input type="button" value="+" className={classs.buttonplus} onClick={increase} />


        </div>
    )
}
