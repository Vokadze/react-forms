import React from "react";
import FormLayout from "../formLayout";
import TextField from "../textField";
import SelectField from "../selectField";
import RadioField from "../radioField";
import MultiSelect from "../multiSelect";
import CheckboxField from "../checkboxField";
import {
    deliveryTypeList,
    needLiftFloorOptions,
    giftList,
    agreements
} from "./fieldsOptions";
import { useOrderContext } from "../../order-context";

const OrderForm = () => {
    const { handleSubmit, values, handleChange, errors, loading } = useOrderContext();

    return (
        <FormLayout title="Оформление заказа">
            {loading && "Загрузка..."}
            <form onSubmit={handleSubmit}>
                <TextField
                    id="fio"
                    name="fio"
                    label="ФИО"
                    value={values.fio}
                    onChange={handleChange}
                    error={errors.fio}
                />
                <TextField
                    id="email"
                    name="email"
                    label="Email"
                    value={values.email}
                    onChange={handleChange}
                    error={errors.email}
                />
                <TextField
                    id="address"
                    name="address"
                    label="Адрес"
                    value={values.address}
                    onChange={handleChange}
                    error={errors.address}
                />
                <SelectField
                    label="Выберите доставку"
                    name="deliveryType"
                    value={values.deliveryType}
                    onChange={handleChange}
                    error={errors.deliveryType}
                    options={deliveryTypeList}
                    defaultOptions="Выберите вариант доставки"
                />
                <RadioField
                    options={needLiftFloorOptions}
                    label="Нужен подъём на этаж?"
                    value={values.needLiftFloor}
                    name="needLiftFloor"
                    onChange={handleChange}
                    error={errors.needLiftFloor}
                />
                <MultiSelect
                    options={giftList}
                    onChange={handleChange}
                    value={values.giftst}
                    name="giftst"
                    label="Выберите подарок"
                />

                <CheckboxField
                    name="agreement"
                    label="Подтвердите согласие"
                    options={agreements}
                    onChange={handleChange}
                    value={values.agreement}
                    error={errors.agreement}
                />

                <button
                    disabled={loading}
                    className="btn btn-primary w-100 mx-auto"
                    type="submit"
                >
                    Оформить
                </button>
            </form>
        </FormLayout>
    );
};

export default OrderForm;
