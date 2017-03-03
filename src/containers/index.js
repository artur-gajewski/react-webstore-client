import React, { Component } from 'react';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Icon} from 'react-fa'
import * as shelfActions from '../ducks/shelf';
import './index.css';

class Index extends Component {

    componentDidMount() {
        const { shelfActions } = this.props;
        shelfActions.fetchProducts();
    }

    render() {
        const productsInCartCount = this.props.cart.length;

        let checkoutLink = null;

        if (productsInCartCount > 0) {
            checkoutLink = (
                <Link className="checkout-link" to="/checkout">
                    <Icon name="shopping-cart" />
                    &nbsp;&nbsp;
                    {productsInCartCount} item(s)
                </Link>
            );
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
                    {this.props.children}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        shelfActions: bindActionCreators(shelfActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
