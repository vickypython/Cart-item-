import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "./components/header"
import { Products } from "./components/Products/Products"
import { Cart } from "./components/Cart/Cart"
export const App = () => {
    return (
        <BrowserRouter>

            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Products />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                </Routes>

            </main>
 </BrowserRouter>




    )
}

