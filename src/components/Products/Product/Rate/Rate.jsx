import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Rate = (props) => {
    return (
        <>
            {[...Array(Math.round(props.stars))].map((e, i) => (
                <span className="star" key={i}>
                    <FontAwesomeIcon
                        icon={faStar}
                        className="starsColor pe-1"
                    />
                </span>
            ))}
        </>
    );
};

export default Rate;
