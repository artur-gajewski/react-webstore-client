import React, { Component } from 'react';
import { Icon } from 'react-fa';
import './cart.css';

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
            const productPrice = product.price.toFixed(2);

            return (
                <div className="product-container" key={idx}>
                    <div className="product-data product-photo">
                        <img role="presentation" src={product.imageUrl} />
                    </div>
                    <div className="product-data product-information">
                        <div>
                            {product.title}
                        </div>
                        <div className="product-id">
                            <div>
                                Product ID: {product.productId}
                            </div>
                            <div>
                                {product.specs}
                            </div>
                        </div>
                    </div>
                    <div className="product-data product-options">
                        <div>
                            {productPrice} €
                        </div>
                        <button className="remove-button" title="Remove this product" onClick={() => this.onRemoveProductFromCart(idx)}>
                            <Icon name="trash" />
                            &nbsp;&nbsp;
                            Remove
                        </button>
                    </div>
                </div>
            );
        });

        return (
            <section className="cart-section">
                <div>
                    <div className="cart-info">
                        <Icon name="shopping-cart" />
                        &nbsp;&nbsp;
                        Your shopping cart
                    </div>
                    <div className="total-price">
                        Total price: {totalPrice} €
                    </div>
                    <div className="cart-container">
                        <div className="cart">
                            {productsSelected}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Cart;
