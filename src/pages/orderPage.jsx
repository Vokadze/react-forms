import React from "react";
import OrderForm from "../components/order-form/orderForm";
import OrderSummary from "../components/order-form/orderSummary";

const OrderPage = () => {
    return (
        <div className="d-flex">
            <OrderForm />
            <OrderSummary />
        </div>
    );
};

export default OrderPage;
