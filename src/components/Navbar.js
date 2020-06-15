import React, { Component } from 'react'
import logo from '../logo.png'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
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
                    <button className="btn text-light border-warning text-capitalize">
                        <i className="mr-2 fas fa-cart-plus"></i>
                        my cart
                    </button>
                </Link>
            </nav>
        )
    }
}
