import axios from "axios";
import { logger } from "../services/logger";

export const request = axios.create({
    // Сюда указываем свой тестовый сервер на https://mockapi.io
    baseURL: "https://6456aad15f9a4f236149a45f.mockapi.io/api/v1/"
});

request.interceptors.response.use(
    (res) => res,
    function (error) {
        //    const isExpectedError =
        //        error.response &&
        //        error.response.status >= 400 &&
        //        error.response.status < 500;
        //    if (!isExpectedError) {
        //        Sentry.captureException(error);
        //        // Например вывести ошибку пользователю
        //        alert("Неожиданная ошибка");
        //    }
        logger.log(error);
        return Promise.reject(error);
    }
);

export const createOrder = async (order) =>
    request.post("/orderss", order).then(({ data }) => data);
