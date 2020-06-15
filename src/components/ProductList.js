import React, { Component, useContext } from 'react'
import Title from './Title'
import { storeProducts } from '../Data';
import { ProductConsumer } from '../context/productContext';
import Product from './Product';

export default class ProductList extends Component {
    state = {
        productsList: storeProducts
    }

    render() {
        return (
            <div className="container">
                <div className="row text-center justify-content-center">
                    <Title name="Our" title="products" />
                    <div className="col-12 d-flex flex-wrap">
                        <ProductConsumer>
                            {
                                value => value.products.map(product => {
                                    return <Product key={product.id} product={product} />
                                })
                            }
                        </ProductConsumer>
                    </div>
                </div>
            </div>
        )
    }
}
