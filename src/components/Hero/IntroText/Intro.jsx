import React from "react";

const Intro = () => {
    return (
        <div className="intro ">
            <h6 className="textSmall">
                <hr className="border-red d-inline-block me-1" />
                NEW TREND
            </h6>
            <p className="text-uppercase introMainText ">
                Autumn sale stylish
                <br />
                <span className="fw-bold">Womens</span>
            </p>
            <div className="link">
                <a
                    href="#"
                    className="text-uppercase text-black text-decoration-none "
                >
                    discover more
                </a>
            </div>
        </div>
    );
};

export default Intro;
