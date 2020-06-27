import React from 'react';
import { Route, Switch } from "react-router-dom";
import Homepage from "./Homepage";
import Products from "./Products";
import Cart from "./Cart";
import Orders from "./Orders";

function Routes() {
    return (
        <Switch>
            <Route path="/" render={() => <Homepage />} />
            <Route path="/products" render={() => <Products />} />
            <Route path="/cart" render={() => <Cart />} />
            <Route path="/orders" render={() => <Orders />} />
        </Switch>
    );
}

export default Routes;