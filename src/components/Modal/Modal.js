import React, { useContext } from 'react';
import { ProductContext } from '../../context/productContext';
import './Modal.css'
import { Link } from 'react-router-dom';

const Modal = () => {
    const { modalClose, modalOpen, modalProduct } = useContext(ProductContext)
    const { title, img, id, price, inCart } = modalProduct
    // console.log(title)
    return (
        <div>
            {
                modalOpen && <div className="full-modal">
                    <div className="container">
                        <div className="row">
                            <div id="modal" className="col-8 col-sm-6 col-md-6 col-lg-4 mx-auto text-center">
                                <h3 className="font-weight-normal">Item added to the cart</h3>
                                <img className="w-50 my-3" src={img} alt="Product Image" />
                                <h3 className="font-weight-normal"> {title} </h3>
                                <h6 className="text-muted"> ${price} </h6>
                                <div className="d-flex justify-content-center">
                                    <Link to="/"><button className="btn btn-info btn-sm" onClick={() => modalClose()}>Continue shopping</button></Link>
                                    <Link to="/cart"><button className="btn btn-warning btn-sm ml-2" onClick={() => modalClose()}>Go to cart</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Modal;