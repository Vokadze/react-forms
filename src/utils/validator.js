import { isRequired } from "./validateRules";

export const validate = (values, config) => {
    const errors = {};

    for (const name in values) {
        const validationRules = config[name];
        for (const rule in validationRules) {
            const { message } = validationRules[rule];

            // Вызываем валидатор
            const hasError = !validator(rule, values[name]);

            if (hasError) {
                errors[name] = message;
                break;
            }
        }
    }

    return errors;
};

const validator = (ruleName, value) => {
    switch (ruleName) {
        case "isRequired":
            return isRequired(value);
        default:
            return true;
    }
};
