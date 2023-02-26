import React, { useEffect, useState } from "react";
import { validate } from "../utils/validator";
import TextField from "./textField";
import { validationSchema } from "./validationSchema";

const MyForm = () => {
    const [values, setValues] = useState({
        email: "",
        link: "",
        description: ""
    });
    const [errors, setErrors] = useState({});
    const isValid = Object.keys(errors).length === 0;

    useEffect(() => {
        const errors = validate(values, validationSchema);
        setErrors(errors);
    }, [values]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            // отправляем если только валидно
            console.log("Отправлено!");
        }
    };

    const handleChange = (e) => {
        const { value, name } = e.target;
        setValues((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const { email, link, description } = values;

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <h2>Отчёт об ошибке</h2>

                    <form onSubmit={handleSubmit}>
                        <TextField
                            id="email"
                            name="email"
                            label="Email"
                            value={email}
                            onChange={handleChange}
                            error={errors.email}
                        />
                        <TextField
                            id="link"
                            name="link"
                            label="Ссылка на страницу с ошибкой"
                            value={link}
                            onChange={handleChange}
                            error={errors.link}
                        />
                        <TextField
                            id="description"
                            name="description"
                            label="Описание"
                            value={description}
                            onChange={handleChange}
                            error={errors.description}
                        />

                        <button disabled={!isValid} type="submit">
                            Отправить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyForm;
