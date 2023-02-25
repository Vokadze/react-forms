export const validationSchema = {
    email: {
        isRequired: {
            message: "Электронная почта обязательна для заполнения"
        },
        isEmail: {
            message: "Email введен некорректно"
        }
    },
    link: {
        isRequired: {
            message: "Ссылка обязательна для заполнения"
        },
        isUrl: {
            message: "URL не корректный"
        }
    },
    description: {
        isRequired: {
            message: "Описание обязательно для заполнения"
        },
        min: {
            message: "Описание должно содержать минимум 20 символов",
            param: 20
        }
    }
};
