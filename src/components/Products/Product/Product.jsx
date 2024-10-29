import React from "react";
import Rate from "./Rate/Rate";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../context/CartContext";

const Product = (props) => {
    const { increaseItemQuantity, cartItems } = useCartContext();
    return (
        <div
            className={` ${
                !props.details
                    ? "col-sm-6 mx-auto text-center"
                    : "col-lg-3 col-md-4 col-sm-6"
            }`}
        >
            <div className="card rounded-2 p-2 ">
                <div className="img rounded-4 productImage mx-auto  p-5">
                    <img
                        src={props.product.image}
                        alt={props.product.title}
                        className="w-100 h-100  rounded-4"
                    />
                </div>
                <span className="text-muted">{props.product.category}</span>
                <h6 className="text-truncate py-2">{props.product.title}</h6>
                <div className="rate py-1">
                    {<Rate stars={props.product.rating.rate} />}
                    <span>{Math.round(props.product.rating.rate)}</span>
                </div>
                <h3 className="price starsColor py-1 fw-normal">
                    ${props.product.price}
                </h3>
                <div className="btns d-flex justify-content-between">
                    <button
                        onClick={() => {
                            increaseItemQuantity(props.product.id);
                        }}
                        className={` addToCart btn border border-secondary px-3 py-2 fitContent mb-3${
                            !props.details ? " mx-auto " : ""
                        }`}
                    >
                        ADD TO CART
                    </button>
                    {props.details ? (
                        <Link
                            className="details  px-3 py-2 fitContent mb-3 text-decoration-underline"
                            to={`product/${props.product.id}`}
                        >
                            Details...
                        </Link>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Product;
