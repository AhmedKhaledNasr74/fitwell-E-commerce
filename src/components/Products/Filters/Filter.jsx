import {
    faGem,
    faLaptop,
    faPerson,
    faPersonDress,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Filter = () => {
    return (
        <div className="container my-5 py-5">
            <ul className="row list-unstyled">
                <li className="col-md-3 col-sm-6">
                    <div
                        className=" px-2 filter text-center hoverFilter "
                        role="button"
                    >
                        <FontAwesomeIcon
                            className="bigText pb-3 mainColor"
                            icon={faLaptop}
                        />
                        <p>electronics</p>
                    </div>
                </li>
                <li className="col-md-3 col-sm-6">
                    <div
                        className=" px-2 filter text-center hoverFilter "
                        role="button"
                    >
                        <FontAwesomeIcon
                            className="bigText pb-3 mainColor"
                            icon={faGem}
                        />
                        <p>jewelery</p>
                    </div>
                </li>
                <li className="col-md-3 col-sm-6">
                    <div
                        className=" px-2 filter text-center hoverFilter "
                        role="button"
                    >
                        <FontAwesomeIcon
                            className="bigText pb-3 mainColor"
                            icon={faPerson}
                        />
                        <p>Men</p>
                    </div>
                </li>
                <li className="col-md-3 col-sm-6">
                    <div
                        className=" px-2 filter text-center hoverFilter "
                        role="button"
                    >
                        <FontAwesomeIcon
                            className="bigText pb-3 mainColor"
                            icon={faPersonDress}
                        />
                        <p>Women</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Filter;
