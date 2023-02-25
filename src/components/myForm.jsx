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

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        const { value, name } = e.target;
        setValues((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    //  Диструкторизируем для удобства
    const { email, link, description } = values;

    useEffect(() => {
        const errors = validate(values, validationSchema);
        setErrors(errors);
    }, [values]);

    return (
        <div>
            <h2>Отчёт об ошибке</h2>
            {/* Для удобства просмотра */}
            <div>
                <pre>{JSON.stringify(errors, null, 2)}</pre>
            </div>

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

                <button type="submit">Отправить</button>
            </form>
        </div>
    );
};

export default MyForm;
