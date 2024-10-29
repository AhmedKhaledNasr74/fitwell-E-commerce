import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Head from "../../RepititiveComponents/Head/Head";

const Trending = () => {
    let [trending, setTrending] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products?limit=4")
            .then((response) => response.json())
            .then((data) => setTrending(data));
    }, []);

    return (
        <div className="container pb-5 mb-5">
            <Head title={"Trending"} />
            <div className="row py-2 g-4">
                {trending.map((item, index) => {
                    return (
                        <Product product={item} key={item.id} details={true} />
                    );
                })}
            </div>
        </div>
    );
};

export default Trending;
