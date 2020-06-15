import React, { Component } from 'react';
import { storeProducts } from '../Data';

export const ProductContext = React.createContext()

class ProductContextProvider extends Component {
    state = {
        products: storeProducts,
        detailsProduct: null,
        cart: [],
        modalOpen: false,
        modalProduct: [],
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0
    }

    getProductId = id => {
        const getProduct = this.state.products.find(pd => pd.id === id)
        return getProduct
    }

    detailsHandler = id => {
        const newProduct = this.getProductId(id)
        localStorage.setItem('detailsProduct', JSON.stringify(newProduct))
        this.setState({
            detailsProduct: newProduct
        })
    }

    inCartHandler = (id) => {
        const newProduct = [...this.state.products]
        const index = newProduct.indexOf(this.getProductId(id))
        const product = newProduct[index]
        product.inCart = true
        product.count = 1
        const price = product.price
        product.total = price
        this.setState(() => {
            return { products: newProduct, cart: [...this.state.cart, product] };
        }, () => this.addTotal())
    }

    modalHandler = id => {
        const newProduct = this.getProductId(id)
        this.setState({
            modalProduct: newProduct,
            modalOpen: true
        })
    }

    modalClose = () => {
        this.setState({
            modalOpen: false
        })
    }

    increment = (id) => {
        const tempProduct = [...this.state.cart]
        const newProduct = tempProduct.find(pd => pd.id === id)
        const index = tempProduct.indexOf(newProduct)
        const product = tempProduct[index]
        product.count = product.count + 1
        product.total = product.price * product.count
        this.setState(() => {
            return {cart: [...tempProduct]}
        }, () => {this.addTotal()})
    }

    decrement = (id) => {
        const tempProduct = [...this.state.cart]
        const newProduct = tempProduct.find(pd => pd.id === id)
        const index = tempProduct.indexOf(newProduct)
        const product = tempProduct[index]
        product.count = product.count > 1 ? product.count - 1 : 1
        product.total = product.count * product.price
        this.setState(() => {
            return {cart: [...tempProduct]}
        }, () => this.addTotal())
    }

    remove = id => {
        const allProduct = [...this.state.products]
        const tempProduct = [...this.state.cart]
        const index = allProduct.indexOf(this.getProductId(id))
        const removeProduct = allProduct[index]
        const newProduct = tempProduct.filter(pd => pd.id !== id)
        removeProduct.count = 0        
        removeProduct.total = 0
        removeProduct.inCart = false
        this.setState(() => {
            return {cart: [...newProduct], product: [...allProduct]}
        }, () => this.addTotal())
    }

    clearCart = () => {
        const tempProduct = this.state.cart
        tempProduct.map(pd => pd.inCart = false)
        this.setState({
            cart: []
        })
    }

    addTotal = () => {
        let subTotal = 0
        this.state.cart.map(item => subTotal += item.total)
        let tempTax = subTotal * 0.1
        let tax = parseFloat(tempTax.toFixed(2))
        let total = subTotal + tax
        this.setState({
            cartSubtotal: subTotal,
            cartTotal: total,
            cartTax: tax
        })
    }

    render() {
        return (
            <ProductContext.Provider
                value={{
                    ...this.state,
                    products: this.state.products,
                    cart: this.state.cart,
                    detailsProduct: this.state.detailsProduct,
                    inCartHandler: this.inCartHandler,
                    getProductId: this.getProductId,
                    detailsHandler: this.detailsHandler,
                    modalHandler: this.modalHandler,
                    modalOpen: this.state.modalOpen,
                    modalClose: this.modalClose,
                    modalProduct: this.state.modalProduct,
                    increment: this.increment,
                    decrement: this.decrement,
                    remove: this.remove,
                    clearCart: this.clearCart
                }}
            >
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

export const ProductConsumer = ProductContext.Consumer

export default ProductContextProvider;