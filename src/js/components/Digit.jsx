import React from "react";

const Digit = (props) => {
    return (
        <div className="Digit bg-dark text-center text-light py-2 px-3 m-1 rounded display-3 fw-bold">
            {props.value}
        </div>
    )
}

export default Digit;