import React, { useState } from "react";
import TextField from "./textField";

const MyForm = () => {
    const [values, setValues] = useState({
        email: "",
        link: "",
        description: ""
    });

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

    return (
        <div>
            <h2>Отчёт об ошибке</h2>

            <form onSubmit={handleSubmit}>
                <TextField
                    id="email"
                    name="email"
                    label="Email"
                    value={email}
                    onChange={handleChange}
                />
                <TextField
                    id="link"
                    name="link"
                    label="Ссылка на страницу с ошибкой"
                    value={link}
                    onChange={handleChange}
                />
                <TextField
                    id="description"
                    name="description"
                    label="Описание"
                    value={description}
                    onChange={handleChange}
                />

                <button type="submit">Отправить</button>
            </form>
        </div>
    );
};

export default MyForm;
