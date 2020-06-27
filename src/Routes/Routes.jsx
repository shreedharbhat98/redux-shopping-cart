import React from 'react';
import { Route, Switch } from "react-router-dom";
import Homepage from "./Homepage";
import Products from "./Products";
import Cart from "./Cart";
import Orders from "./Orders";

function Routes() {
    return (
        <Switch>
            <Route exact path="/" render={() => <Homepage />} />
            <Route exact path="/products" render={() => <Products />} />
            <Route exact path="/cart" render={() => <Cart />} />
            <Route exact path="/orders" render={() => <Orders />} />
        </Switch>
    );
}

export default Routes;