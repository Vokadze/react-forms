import "./index.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import OrderPage from "./pages/orderPage";
import { OrderContextProvider } from "./order-context";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div className="container mt-4">
            <OrderContextProvider>
                <Switch>
                    <Route path="/" exact component={OrderPage} />
                </Switch>
            </OrderContextProvider>
            <ToastContainer />
        </div>
    );
}

export default App;
