import React, { useState } from "react";

const MyForms = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = () => {};

    const handleEmailChange = (e) => {
        const { value } = e.target;
        setEmail(value);
    };

    return (
        <div>
            <h2>Отчёт об ошибке</h2>

            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="email">Email</label>{" "}
                    <input
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </p>
                <p>
                    <label htmlFor="link">Ссылка на страницу с ошибкой</label>{" "}
                    <input id="link" name="link" />
                </p>

                <p>
                    <label htmlFor="description">Описание</label>{" "}
                    <input id="description" name="description" />
                </p>

                <button type="submit">Отправить</button>

                <div>
                    <div>
                        <label htmlFor="radio1">Radio 1</label>
                        <input type="radio" id="radio1" name="radio" />
                    </div>
                    <div>
                        <label htmlFor="radio2"> Radio 2</label>
                        <input type="radio" id="radio2" name="radio" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default MyForms;
