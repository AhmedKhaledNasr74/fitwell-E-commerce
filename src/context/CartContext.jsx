import React, { createContext, useContext, useEffect, useState } from "react";
import Cart from "../components/Cart/Cart";
import { useShopContext } from "./ShopContext";

const CartContext = createContext({});

const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const { getItem } = useShopContext();

    useEffect(() => {
        const calculateTotalPrice = () => {
            const total = cartItems.reduce((acc, item) => {
                return acc + item.quantity * getItem(item.id).price;
            }, 0);

            setTotalPrice(total);
        };

        calculateTotalPrice();
    }, [cartItems]);
    const getItemQuantity = (id) => {
        return cartItems.find((item) => item.id === id)?.quantity || 0;
    };

    const increaseItemQuantity = (id) => {
        setCartItems((currentItems) => {
            if (currentItems.find((item) => item.id === id) == null)
                return [...currentItems, { id: id, quantity: 1 }];
            else {
                return currentItems.map((item, i) => {
                    if (item.id === id) {
                        return { id: item.id, quantity: item.quantity + 1 };
                    } else return item;
                });
            }
        });
    };

    const decreaseItemQuantity = (id) => {
        const changedCart = cartItems.map((item, i) => {
            if (item.id === id && item.quantity > 1)
                return { id: item.id, quantity: item.quantity - 1 };
            else return item;
        });
        setCartItems(changedCart);
    };

    const removeItem = (id) => {
        setCartItems((currentItems) => {
            return currentItems.filter((item) => item.id !== id);
        });
    };

    const emptyCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                totalPrice,
                increaseItemQuantity,
                decreaseItemQuantity,
                getItemQuantity,
                removeItem,
                emptyCart,
            }}
        >
            {children}
            <Cart />
        </CartContext.Provider>
    );
};

export default CartContextProvider;

export const useCartContext = () => {
    return useContext(CartContext);
};
