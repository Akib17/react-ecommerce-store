import React from 'react';

const CartItem = ({value, item}) => {
    const { title, img, count, total, id, price } = item
    const { increment, decrement, remove } = value
    return (
        <div className="row text-center my-3 py-2 text-capitalize align-items-center border-bottom">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} alt="Product image" style={{width: '5rem', height: 'auto'}} className="img-fluid" />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <h6 className="font-weight-normal"> {title} </h6>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p className="text-muted"> ${price} </p>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div onClick={() => decrement(id)} className="btn border">-</div>
                <span className="mx-2"> {count} </span>
                <div onClick={() => increment(id)} className="btn border">+</div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <button onClick={() => remove(id)} className="btn btn-outline-danger btn-sm">Remove</button>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <p className="lead"> ${total} </p>
            </div>
        </div>
    );
};

export default CartItem;