import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../context/CartContext";

const Navbar = () => {
    const { cartItems } = useCartContext();
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top shadow">
            <div className="container">
                <Link className="navbar-brand" to={"/"}>
                    Fitwell
                </Link>
                <button
                    className="navbar-toggler "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item d-flex align-items-center">
                            <button
                                className="nav-link btn position-relative"
                                to="not"
                                type="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasWithBothOptions"
                                aria-controls="offcanvasWithBothOptions"
                            >
                                {cartItems.length ? (
                                    <span className="numberOfItems bg-danger ">
                                        {cartItems.length}
                                    </span>
                                ) : (
                                    <></>
                                )}
                                <FontAwesomeIcon icon={faCartShopping} />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
