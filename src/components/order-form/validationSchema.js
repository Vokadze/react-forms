import * as yup from "yup";

export const validationSchema = yup.object().shape({
    fio: yup
        .string()
        .required("ФИО обязательно для заполнения")
        .matches(
            /^(([a-zA-Zа-яА-Я]+)\s){1,}(([a-zA-Zа-яА-Я]+)\s?){1,}$/,
            "Введите корректное ФИО"
        ),
    email: yup
        .string()
        .required("Электронная почта обязательна для заполнения")
        .email("Email введён некорректно"),
    address: yup.string().required("Адрес обязателен для заполнения"),
    deliveryType: yup.string().required("Выберите вариант доставки"),
    needLiftFloor: yup.string().required("Укажите нужен ли подъём на этаж"),
    agreement: yup
        .array()
        .test(
            "contains value",
            "Согласие на обработку данных обязательно",
            (value) => value.includes("1")
        )
});
