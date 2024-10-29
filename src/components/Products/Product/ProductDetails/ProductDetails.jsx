import React, { useEffect, useState } from "react";
import Product from "../Product";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
    const [product, setProduct] = useState();
    const params = useParams();
    useEffect(() => {
        console.log(params.productId);
        fetch(`https://fakestoreapi.com/products/${params.productId}`)
            .then((data) => data.json())
            .then((data) => {
                setProduct(data);
                console.log(data);
            });
    }, [product]);
    return (
        <>
            {product && (
                <div className="productDetails d-flex align-items-center">
                    <Product
                        product={product}
                        key={product.id}
                        details={false}
                    />
                </div>
            )}
        </>
    );
};

export default ProductDetails;
