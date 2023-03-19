import React from "react";
import PropTypes from "prop-types";

const SingleCheckboxField = (props) => {
    const { name, label, value, checked, onChange } = props;
    const getOptionId = (value, label) => `${value}_${label}`;

    const id = getOptionId(value, label);
    return (
        <div className="from-check from-check-inline">
            <input
                className="from-check-input"
                type="checkbox"
                id={id}
                checked={checked}
                name={name}
                value={value}
                onChange={onChange}
            />
            <label className="form-check-label" htmlFor={id}>
                {label}
            </label>
        </div>
    );
};

SingleCheckboxField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.bool.isRequired
    ]),
    checked: PropTypes.bool,
    onChange: PropTypes.func
};

export default SingleCheckboxField;
