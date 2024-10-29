import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import React, { useState } from "react";
import { useShopContext } from "../../../context/ShopContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";

const CartItem = ({ product }) => {
    const { getItem } = useShopContext();
    const { increaseItemQuantity, decreaseItemQuantity, removeItem } =
        useCartContext();
    const [item, setItem] = useState(getItem(product.id));
    return (
        <div className="card rounded-0 py-3 border-0 border-bottom">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <Link
                            to={`product/${item.id}`}
                            className="img"
                            style={{ width: "40px" }}
                        >
                            <img
                                src={item.image}
                                className="img-fluid w-100"
                                alt="Shopping item"
                            />
                        </Link>
                        <div className="ms-3">
                            <h6
                                className=" text-truncate"
                                style={{ width: "100px" }}
                            >
                                {item.title.split(" ").slice(0, 3).join(" ")}
                            </h6>
                            {/* <p className="small mb-0">256GB, Navy Blue</p>   */}
                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-between">
                        <div
                            style={{ width: "50px" }}
                            className="d-flex flex-column justify-content-center align-items-center"
                        >
                            <button
                                className="border px-1"
                                onClick={() => increaseItemQuantity(product.id)}
                            >
                                +
                            </button>
                            <div className="d-flex justify-content-center align-items-center">
                                <span className="textSmall">x</span>
                                <h5 className="fw-normal mb-0 py-1">
                                    {product.quantity}
                                </h5>
                            </div>

                            {product.quantity > 1 && (
                                <button
                                    className="border px-1"
                                    onClick={() =>
                                        decreaseItemQuantity(product.id)
                                    }
                                >
                                    -
                                </button>
                            )}
                        </div>
                        <div
                            style={{ width: "75px" }}
                            className="d-flex flex-column align-items-center"
                        >
                            <h5
                                className=" text-truncate mb-0"
                                style={{ maxWidth: "85px" }}
                            >
                                ${item.price * product.quantity}
                            </h5>
                            <span>{item.price}</span>
                        </div>
                        <button
                            className="btn"
                            href="#!"
                            style={{ color: "#cecece" }}
                            onClick={() => removeItem(product.id)}
                        >
                            <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
