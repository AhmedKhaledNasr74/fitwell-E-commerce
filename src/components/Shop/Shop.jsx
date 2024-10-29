import React, { useEffect, useState } from "react";
import Head from "../RepititiveComponents/Head/Head";
import ActualFilter from "./ActualFilter/ActualFilter";
import { useShopContext } from "../../context/ShopContext";
import CartItem from "../Cart/CartItem/CartItem";
import Product from "../Products/Product/Product";

const Shop = () => {
    const { products, fetchData } = useShopContext();
    return (
        <div className="container ">
            <Head title={"Our Products"} />
            <ActualFilter fetchData={fetchData} />
            <div className="row g-4 pb-3">
                {products.map((item, index) => {
                    return (
                        <Product product={item} key={item.id} details={true} />
                    );
                })}
            </div>
        </div>
    );
};

export default Shop;
