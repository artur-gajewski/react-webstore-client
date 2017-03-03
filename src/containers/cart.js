import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as cartActions from '../ducks/cart';
import './shop.css';

class Cart extends Component {

    render() {
        const total = this.props.cart.reduce( (prev, curr) => prev + curr.price, 0 ).toFixed(2);
        return (
            <div>
                Total: {total}
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
