export const parceYupError = (yupError) => {
    const { inner } = yupError;

    return Array.isArray(inner)
        ? inner.reduce((acc, item) => {
              const { path, errors } = item;
              if (!Object.prototype.hasOwnProperty.call(acc, path) && errors.length) {
                  // Если нет то добавляем первую
                  acc[path] = errors[0];
              }
              return acc;
          }, {})
        : {};
};
