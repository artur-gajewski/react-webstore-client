import React, { Component } from 'react';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Icon} from 'react-fa'

import '../styles.css';

import * as shelfActions from '../ducks/shelf';
import * as cartActions from '../ducks/cart';

import Shelf from '../components/shelf';

class Shop extends Component {

    componentDidMount() {
        const { shelfActions } = this.props;
        shelfActions.fetchItems();
    }

    render() {
        //const total = this.props.cart.reduce( (prev, curr) => prev + curr.price, 0 ).toFixed(2);
        const itemCount = this.props.cart.length;

        let checkoutLink = null;

        if (itemCount > 0) {
            checkoutLink =  <Link className="checkout-link" to="/checkout">
                                <Icon name="shopping-cart" />
                                &nbsp;&nbsp;
                                {itemCount} item(s)
                            </Link>
        }

        return (
            <div>
                <nav className="product-filter">
                    <h1>
                        <Link className="title-link" to="/">React Web Store</Link>
                    </h1>
                    <div className="sort">
                        <div className="collection-sort">
                            {checkoutLink}
                        </div>
                    </div>
                </nav>

                <div>
                    <Shelf
                        addItem={this.props.cartActions.addToCart}
                        shelfItems={this.props.shelf}
                        cartItems={this.props.cart}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        shelf: state.shelf,
        cart: state.cart,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        shelfActions: bindActionCreators(shelfActions, dispatch),
        cartActions: bindActionCreators(cartActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
