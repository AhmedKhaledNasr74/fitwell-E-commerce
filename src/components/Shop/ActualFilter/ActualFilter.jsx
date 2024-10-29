import React, { useState } from "react";

const ActualFilter = (props) => {
    let [activeFilter, setActiveFilter] = useState("All");

    const handleClick = (activeFilter) => {
        setActiveFilter(activeFilter);
    };
    return (
        <div className="row">
            <div className=" col-sm-10 col-lg-6  mx-auto ">
                <ul className="ActualFilter list-unstyled d-flex justify-content-around ">
                    {[
                        "All",
                        "electronics",
                        "jewelery",
                        "men's clothing",
                        "women's clothing",
                    ].map((filter) => (
                        <li key={filter}>
                            <div
                                role="button"
                                className={`${
                                    activeFilter === filter ? "activeNow" : ""
                                }`}
                                onClick={() => {
                                    handleClick(filter);
                                    props.fetchData(filter);
                                }}
                            >
                                {filter}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ActualFilter;
