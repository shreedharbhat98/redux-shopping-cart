import React from 'react';
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div style={{display:"flex",justifyContent:'space-between'}}>
            <Link to="/" > Home </Link>
            <Link to="/products" > Products </Link>
            <Link to="/cart" > Cart </Link>
            <Link to="/orders" > Orders </Link>
        </div>
    );
}

export default Navbar;