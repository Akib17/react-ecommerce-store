import React from 'react';
import { Link } from 'react-router-dom';

const CartTotal = ({value}) => {
    const { cartSubtotal, cartTotal, cartTax, clearCart } = value
    return (
        <div className="container-fluid mb-4">
            <div className="row">
                <div className="col-10 mx-sm-auto mt-3 text-sm-center ml-md-auto mx-auto col-md-11 col-sm-8 text-capitalize text-md-right">
                    <Link onClick={() => clearCart()} to="/"><button className="btn btn-outline-danger">Clear cart</button></Link>
                    <h6 className="font-weight-normal mt-3">Subtotal: ${cartSubtotal} </h6>
                    <p className="text-muted">Tax: ${cartTax} </p>
                    <h4 className="lead font-weight-normal">Total: ${cartTotal} </h4>
                </div>
            </div>
        </div>
    );
};

export default CartTotal;