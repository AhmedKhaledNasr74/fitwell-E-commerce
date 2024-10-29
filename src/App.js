import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css";
import {
    createBrowserRouter,
    Route,
    RouterProvider,
    Routes,
} from "react-router-dom";

import Hero from "./components/Hero/Hero";
import Filter from "./components/Products/Filters/Filter";
import Trending from "./components/Products/Trending/Trending";
import Shop from "./components/Shop/Shop";
import { createContext } from "react";
import ProductDetails from "./components/Products/Product/ProductDetails/ProductDetails";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./context/CartContext";
import ShopContextProvider from "./context/ShopContext";
import Footer from "./components/Footer/Footer";

export const ProductContext = createContext();

function App() {
    return (
        <div className="App">
            <ShopContextProvider>
                <CartContextProvider>
                    <Navbar />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <Hero />
                                    <Filter />
                                    <Trending />
                                    <Shop />
                                </>
                            }
                        ></Route>
                        <Route
                            path="product/:productId"
                            element={<ProductDetails />}
                        ></Route>
                    </Routes>
                    <Footer />
                </CartContextProvider>
            </ShopContextProvider>
        </div>
    );
}

export default App;
