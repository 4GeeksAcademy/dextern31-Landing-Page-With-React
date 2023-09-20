import React from "react";
import propTypes from "prop-types";

const Button = (props) => {
    return (
        <a href={props.url} className={props.className}>
            {props.label}
        </a>
    );
};

Button.propTypes = {
    url: propTypes.string,
    className: propTypes.string,
    label: propTypes.string
}

export default Button;