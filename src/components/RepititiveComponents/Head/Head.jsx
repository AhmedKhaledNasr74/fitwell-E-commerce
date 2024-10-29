import React from "react";

const Head = (props) => {
    return (
        <div className="head d-flex justify-content-between mb-5">
            <h1>{props.title}</h1>
            <button className="btn border-black px-5 py-3">Shop Now</button>
        </div>
    );
};

export default Head;
