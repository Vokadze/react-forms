import React, { useContext } from "react";
import useOrderForm from "./components/order-form/use-order-form";
import { validationSchema } from "./components/order-form/validationSchema";
import PropTypes from "prop-types";

export const OrderContext = React.createContext("default value");

export const OrderContextProvider = ({ children }) => {
    const initialState = {
        fio: "",
        email: "",
        address: "",
        deliveryType: "",
        needLiftFloor: "",
        giftst: [],
        agreement: []
    };

    const order = useOrderForm(initialState, validationSchema);

    return (
        <OrderContext.Provider value={order}>{children}</OrderContext.Provider>
    );
};

OrderContextProvider.propTypes = {
    children: PropTypes.object.isRequired
};

export const useOrderContext = () => useContext(OrderContext);
