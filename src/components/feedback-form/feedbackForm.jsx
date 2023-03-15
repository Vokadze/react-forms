import React, { useEffect, useState } from "react";
import TextField from "../../components/textField";
import { validate } from "../../utils/validator";
import { validationSchema } from "../../components/feedback-form/validationSchema";
import FormLayout from "../formLayout";

const FeedbackForm = () => {
    const [values, setValues] = useState({
        email: "",
        link: "",
        description: "",
        password: ""
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

    const { email, link, description, password } = values;

    return (
        <>
            <FormLayout title="Отчет об ошибке">
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

                    <TextField
                        id="password"
                        name="password"
                        label="Пароль"
                        value={password}
                        onChange={handleChange}
                        error={errors.password}
                        type="password"
                    />

                    <button
                        className="btn btn-primary w-100 mx-auto"
                        disabled={!isValid}
                        type="submit"
                    >
                        Отправить
                    </button>
                </form>
            </FormLayout>
        </>
    );
};

export default FeedbackForm;
