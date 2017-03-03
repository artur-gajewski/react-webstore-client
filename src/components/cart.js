import React, { Component } from 'react';
import { Link } from 'react-router'

class Cart extends Component {
    constructor(props) {
        super(props);
        this.onRemoveProductFromCart = this.onRemoveProductFromCart.bind(this);
        this.state = this.props.state;
    }

    onRemoveProductFromCart(product) {
        this.props.removeProduct(product);
    }

    render() {
        const totalPrice = this.props.selectedProducts.reduce( (prev, curr) => prev + curr.price, 0 ).toFixed(2);

        const productsSelected = this.props.selectedProducts.map((product, idx) => {
            return (
                <li key={idx}>
                    {product.title}
                    <button title="Remove this product" onClick={() => this.onRemoveProductFromCart(idx)}> - </button>
                </li>
            );
        });

        return (
            <div>
                <h2>Your Shopping Cart:</h2>
                <div>
                    <b>Total price:</b> {totalPrice} €
                </div>
                <ul>
                    {productsSelected}
                </ul>
            </div>
        );
    }
}

export default Cart;
