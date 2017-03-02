import React, { Component } from 'react';
import AlertContainer from 'react-alert';

class Shelf extends Component {
    constructor(props) {
        super(props);
        this.onAddItemToCart = this.onAddItemToCart.bind(this);
        this.alertOptions = {
            offset: 14,
            position: 'bottom right',
            theme: 'dark',
            time: 5000,
            transition: 'fade'
        };
    }

    onAddItemToCart(item) {
        this.msg.success('Added ' + item.title + ' to your cart!');
        this.props.addItem(item);
    }

    render() {
        if (!this.props.shelfItems.length === 0) return null;

        const shelfItems = this.props.shelfItems.map((item, idx) => {
            return (
                <div key={item.productId} className="product-card">
                    <div className="product-image">
                        <img role="presentation" src={item.imageUrl} />
                    </div>
                    <div className="product-info">
                        <h5>{item.title}</h5>
                        <h6>{item.price.toFixed(2)} €</h6>
                        <h7>
                            <button className="add-button" onClick={() => this.onAddItemToCart(item)}> Add to cart </button>
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
