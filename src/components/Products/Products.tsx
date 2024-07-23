import { FunctionComponent, useEffect, useState } from "react"
import classes from './products.module.scss'
import { Loader } from '../loader'
const API_URL = 'https://dummyjson.com/products'
export type Product = {
    id: number
    title: string
    price: number
    thumbnail: string
    image: string
    quantity: number
}
export interface CartProps {
    [productId: string]: Product
}
export const Products: FunctionComponent = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [products, setProducts] = useState<Product>([])
    const [cart, setCart] = useLocalStorageState(second)
    useEffect(() => {
        fetchProducts(API_URL)
    })
    const fetchProducts = async (url: string) => {
        try {
            setLoading(true)
            const response = await fetch(url)

            if (response.ok) {
                const data = await response.json()
                setProducts(data.products)
                setLoading(false)
            } else {
                setError(true)
                setLoading(false)
            }

        } catch (error) {
            setError(true)
            setLoading(false)
        }

    }
    if (error) {
        return <h3 className={classes.error}>An error occured</h3>
    }
    if (loading) {
        return <Loader />
    }
    return (
        <section className={classes.productPage}>
            <h1>Products</h1>
            <div className={classes.container}>{
                products.map(product => (
                    <div className={classes.product} key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>Price:{product.price}</p>
                        <button disabled={ }>Add to Cart</button>
                    </div>
                ))}

            </div>
        </section>
    )
}
