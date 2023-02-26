import React from "react";
import PropTypes from "prop-types";

const TextField = (props) => {
    const { name, label, value, onChange, type, error } = props;

    const getInputClasses = () => {
        return "form-control" + (error ? " is-invalid" : "");
    };
    return (
        <div className="mb-4">
            <label htmlFor={name}>{label}</label>{" "}
            <div className="input-group has-validation">
                <input
                    value={value}
                    onChange={onChange}
                    id={name}
                    type={type}
                    name={name}
                    className={getInputClasses()}
                />
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
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
    type: PropTypes.string,
    error: PropTypes.string
};

export default TextField;
