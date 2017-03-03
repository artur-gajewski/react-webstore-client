import React, { Component } from 'react';
import AlertContainer from 'react-alert';
import './shelf.css';

class Shelf extends Component {
    constructor(props) {
        super(props);
        this.onAddProductToCart = this.onAddProductToCart.bind(this);
        this.alertOptions = {
            offset: 14,
            position: 'bottom right',
            theme: 'dark',
            time: 5000,
            transition: 'fade'
        };
    }

    onAddProductToCart(product) {
        this.msg.success('Added ' + product.title + ' to your cart!');
        this.props.addProduct(product);
    }

    render() {
        if (!this.props.shelfItems.length === 0) return null;

        const shelfItems = this.props.shelfItems.map((product, idx) => {
            return (
                <div key={product.productId} className="product-card">
                    <div className="product-image">
                        <img role="presentation" src={product.imageUrl} />
                    </div>
                    <div className="product-info">
                        <h5>{product.title}</h5>
                        <h6>{product.price.toFixed(2)} €</h6>
                        <h7>
                            <button className="add-button" onClick={() => this.onAddProductToCart(product)}> Add to cart </button>
                        </h7>
                    </div>
                </div>
            );
        });

        return (
            <section className="products">
                <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
                {shelfItems}
            </section>
        );
    }
}

export default Shelf;
