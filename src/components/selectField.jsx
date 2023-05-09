import React from "react";
import PropTypes from "prop-types";

const SelectField = (props) => {
    const { label, name, value, onChange, error, options, defaultOption } =
        props;

    const getSelectClasses = () => {
        return "form-select" + (error ? " is-invalid" : "");
    };

    return (
        <div className="mb-4">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <select
                value={value}
                onChange={onChange}
                className={getSelectClasses()}
                id={name}
                name={name}
            >
                <option value="" disabled>
                    {defaultOption}
                </option>
                {options.map(({ value, label }) => (
                    <option key={value} value={value}>
                        {label}
                    </option>
                ))}
            </select>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

SelectField.defaultProps = {
    defaultOption: "Выберите вариант..."
};

SelectField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired
        })
    ),
    defaultOption: PropTypes.string,
    error: PropTypes.string
};

export default SelectField;
