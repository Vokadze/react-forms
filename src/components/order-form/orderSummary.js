import React from "react";
import { useOrderContext } from "../../order-context";

const OrderSummary = () => {
    const { values } = useOrderContext();
    const { fio, deliveryType, needLifeFloor /** gifts */ } = values;
    // const gift = gifts.map(({ label }) => label.join(", "));

    return (
        <div className="card">
            <div className="card-body">
                <div>ФИО: {fio}</div>
                <div>Доставка: {deliveryType}</div>
                <div>Подъем на этаж: {needLifeFloor}</div>
                {/* <div>Подарок:{gifts}</div> */}
            </div>
        </div>
    );
};

export default OrderSummary;
