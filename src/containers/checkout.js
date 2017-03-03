import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Cart from '../components/cart';
import * as cartActions from '../ducks/cart';
import './checkout.css';

class Checkout extends Component {
    render() {
        return (
            <div>
                <Cart
                    removeProduct={this.props.cartActions.removeFromCart}
                    selectedProducts={this.props.cart}
                />
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
        cartActions: bindActionCreators(cartActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
