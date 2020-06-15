import React, { useContext, useState } from 'react';
import logo from '../logo.png'
import { Link } from 'react-router-dom'
import { ProductContext } from '../context/productContext';

const Navbar = () => {
    const { cart } = useContext(ProductContext)
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <Link to="/" >
                <img src={logo} className="navbar-brand w-50" alt="Logo" />
            </Link>
            <ul className="navbar-nav">
                <li className="nav-item ml-5">
                    <Link className="nav-link" to="/">Products</Link>
                </li>
            </ul>
            <Link to="/cart" className="ml-auto">
                <button className="btn text-light btn-outline-warning text-capitalize">
                    <i className="mr-2 fas fa-cart-plus"></i>
                        my cart
                    </button>
                    <div className="btn text-warning btn-outline-warning ml-1"> {cart.length} </div>
            </Link>
        </nav>
    );
};

export default Navbar;