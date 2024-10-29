import React, { createContext, useContext, useEffect, useState } from "react";

const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchData("All");
    }, []);

    const fetchData = (filter) => {
        let url;
        if (filter != "All")
            url = "https://fakestoreapi.com/products/category/";
        else url = "https://fakestoreapi.com/products/";
        fetch(`${url + (filter == "All" ? "" : filter)}`)
            .then((data) => data.json())
            .then((result) => setProducts(result));
    };

    const getItem = (id) => {
        return products.find((item) => item.id === id);
    };

    return (
        <ShopContext.Provider value={{ products, fetchData, getItem }}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;

export const useShopContext = () => {
    return useContext(ShopContext);
};
