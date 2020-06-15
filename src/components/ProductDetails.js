import React, { useContext } from 'react';
import { ProductContext } from '../context/productContext';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
    const product = JSON.parse(localStorage.getItem('detailsProduct'))
    const { inCartHandler, detailsProduct } = useContext(ProductContext)
    const { title, id, price, inCart, img, info } = detailsProduct ? detailsProduct : product
    // console.log(inCart)
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img src={img} alt="Product Image" />
                </div>
                <div className="col-md-6">
                    <h2 className="font-weight-normal mt-3"> {title} </h2>
                    <h4> Price: ${price} </h4>
                    <p> Desc: {info} </p>
                    <div className="d-flex">
                        <Link to="/"> <button className="btn btn-info">Back to products</button></Link>
                        <button onClick={() => inCartHandler(id)} className="btn btn-success btn-sm ml-3" disabled={inCart ? true : false} >
                            <i className="mr-1 fas fa-cart-plus"></i>
                            {inCart ? 'Added to cart' : 'Add to cart'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;