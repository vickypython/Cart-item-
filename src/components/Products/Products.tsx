import { FunctionComponent, useEffect, useState } from "react"
import useLocalStorageState from 'use-local-storage-state'
import classes from './products.module.scss'
import { Loader } from '../loader'

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
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [products, setProducts] = useState<Product[]>([])
    const [cart, setCart] = useLocalStorageState<CartProps>('cart', {})
    const API_URL = 'https://dummyjson.com/products'
    useEffect(() => {
        fetchProducts(API_URL)
    },[API_URL])
    const fetchProducts = async (url: string) => {
        try {
            // setLoading(true)
            const response = await fetch(url)

            if (response.ok) {
                const data = await response.json()
                console.log("response Object",data);
                
                setProducts(data.products)
                setLoading(false)
            } else {
                setError(true)
                setLoading(false)
            }

        } catch (error) {
            setError(true)
            setLoading(false)
        } finally {
            setLoading(false)
        }

    }
    const addToCart = (product: Product) => {
        product.quantity = 1
        setCart((prevCart) => ({
            ...prevCart, [product.id]: product
        }))

    }
    // console.log(addToCart({
    //     id: 2,
    //     title: "Apple ",
    //     price: 30,
    //     thumbnail: "Here is a good apple",
    //     image: "",
    //     quantity: 2
    // }));
    const isInCart = (productId: number): boolean => Object.keys(cart || {}).includes(productId.toString())




if (error) {
        return <h3 className={classes.error}>An error occured</h3>
    }
    if (loading) {
        return <Loader />
    }
    return (
        <section className={classes.productPage}>
            <h1>Products</h1>
            <div className={classes.container}>
                {
                    products.map(product => (
                        <div className={classes.product} key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                            <h3>{product.title}</h3>
                            <p>Price:{product.price}</p>
                            <button disabled={isInCart(product.id)} onClick={() => addToCart(product)}>Add to Cart</button>
                        </div>
                    ))}

            </div>
        </section>
    )
}
