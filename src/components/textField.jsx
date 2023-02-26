import React, { useState } from "react";
import PropTypes from "prop-types";

const TextField = (props) => {
    const { name, label, value, onChange, type, error } = props;
    // Добавляем состояние показывать/не показывать пароль
    const [showPassword, setShowPassword] = useState(false);

    // Метод для изменения состояния
    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };

    const getInputClasses = () => {
        return "form-control" + (error ? " is-invalid" : "");
    };
    return (
        <div className="mb-4">
            <label htmlFor={name}>{label}</label>{" "}
            <div className="input-group has-validation">
                <input
                    // Если пароль показываем, то type === "text"
                    type={showPassword ? "text" : type}
                    id={name}
                    value={value}
                    onChange={onChange}
                    name={name}
                    className={getInputClasses()}
                />
                {type === "password" && (
                    <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={toggleShowPassword}
                    >
                        {showPassword ? "Скрыть" : "Показать"} пароль
                    </button>
                )}
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
