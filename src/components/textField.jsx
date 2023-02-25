import React from "react";
import PropTypes from "prop-types";

const TextField = (props) => {
    const { name, label, value, onChange, type } = props;
    return (
        <p>
            <label htmlFor={name}>{label}</label>{" "}
            <input
                value={value}
                onChange={onChange}
                id={name}
                type={type}
                name={name}
            />
        </p>
    );
};

TextField.defaultProps = {
    type: "text"
};

TextField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired
};

export default TextField;