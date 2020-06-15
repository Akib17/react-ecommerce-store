import React from 'react';

const EmptyCart = () => {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 text-center">
                    <h2 className="display-4">Your cart is currently empty</h2>
                </div>
            </div>
        </div>
    );
};

export default EmptyCart;