import React, { useContext, useEffect, useState } from "react";
import Product from "../Products/Product/Product";
import { useCartContext } from "../../context/CartContext";
import CartItem from "./CartItem/CartItem";
import { useShopContext } from "../../context/ShopContext";

const Cart = () => {
    const { getItem } = useShopContext();
    const { cartItems, emptyCart, totalPrice } = useCartContext();
    return (
        <>
            <div
                className="offcanvas offcanvas-end"
                data-bs-scroll="true"
                tabIndex={-1}
                id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel"
            >
                <div className="offcanvas-header">
                    <h5
                        className="offcanvas-title"
                        id="offcanvasWithBothOptionsLabel"
                    >
                        Your Shopping Cart
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="offcanvas-body ">
                    <div className="container h-75 overflow-y-scroll p-0 border-bottom">
                        <div className="row p-0 m-0">
                            {cartItems.map((item) => (
                                <CartItem product={item} key={item.id} />
                            ))}
                        </div>
                    </div>

                    <h5 className=" m-2 p-2 text-start">
                        {`Total : ${Math.round(totalPrice)}`}
                        <span className="fw-bold">$</span>
                    </h5>

                    <button className="btn btn-success w-100 my-2">
                        CheckOut
                    </button>
                    <button
                        className="btn btn-danger w-100"
                        onClick={emptyCart}
                    >
                        Empty Cart
                    </button>
                </div>
            </div>
        </>
    );
};

export default Cart;
