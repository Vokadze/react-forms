export const validationSchema = {
    fio: {
        isRequired: {
            message: "ФИО обязательно для заполнения"
        },
        isFIO: {
            message: "Введите корректное ФИО"
        }
    },
    email: {
        isRequired: {
            message: "Электронная почта обязательна для заполнения"
        },
        isEmail: {
            message: "Email введен некорректно"
        }
    },
    deliveryType: {
        isRequired: {
            message: "Выберите вариант доставки"
        }
    },
    needLiftFloor: {
        isRequired: {
            message: "Укажите, нужен ли подъём на этаж"
        }
    }
};