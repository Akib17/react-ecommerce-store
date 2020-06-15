import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/productContext';

const Product = (props) => {
    const { detailsHandler, inCartHandler, modalHandler, modalClose } = useContext(ProductContext)
    const { title, id, img, count, inCart, price } = props.product
    return (
        <div className="col-10 offset-1 offset-sm-0 col-lg-4 col-md-6 col-sm-6">
            <div className="card border-0 shadow-sm rounded my-3 p-3 align-items-center justify-content-between" style={{ height: '400px' }}>
                <img style={{ width: '100px' }} src={img} className="w-50" alt="" />
                <h2 className="font-weight-normal"> {title} </h2>
                <h5 className="font-weight-normal"> Price: ${price} </h5>
                <div className="d-flex">
                    <Link onClick={() => detailsHandler(id)} to={`/details/${id}`}><button className="btn btn-info btn-sm">See details</button></Link>
                    <button onClick={() => { inCartHandler(id); modalHandler(id) }} className="btn btn-success btn-sm ml-3" disabled={inCart ? true : false} >
                        <i className="mr-1 fas fa-cart-plus"></i>
                        {inCart ? 'Added to cart' : 'Add to cart'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;