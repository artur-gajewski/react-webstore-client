import React, { Component } from 'react';
import { Link } from 'react-router'

class Cart extends Component {
    constructor(props) {
        super(props);
        this.onRemoveItemFromCart = this.onRemoveItemFromCart.bind(this);
        this.state = this.props.state;
    }

    onRemoveItemFromCart(item) {
        this.props.removeItem(item);
    }

    render() {
        const total = this.props.selectedItems.reduce( (prev, curr) => prev + curr.price, 0 ).toFixed(2);

        const itemsSelected = this.props.selectedItems.map((item, idx) => {
            return (
                <li key={idx}>{item.title}
                    <button title="Remove this item" onClick={() => this.onRemoveItemFromCart(idx)}> - </button>
                </li>
            );
        });

        let linkToInvoice = null;

        if (this.props.selectedItems.length > 0) {
            linkToInvoice = <Link className="invoice-link" to='/invoice'>Ready? Go to Invoice</Link>;
        }

        return (
            <div>
                <h2>Your Shopping Cart:</h2>
                <b>Total price:</b> {total} €
                <ul>
                    {itemsSelected}
                </ul>
                {linkToInvoice}
            </div>
        );
    }
}

export default Cart;
