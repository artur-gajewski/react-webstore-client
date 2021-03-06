import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Shelf from '../components/shelf';
import * as cartActions from '../ducks/cart';
import './shop.css';

class Shop extends Component {

    render() {
        return (
            <div>
                <Shelf
                    addProduct={this.props.cartActions.addToCart}
                    shelfItems={this.props.shelf}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        shelf: state.shelf,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        cartActions: bindActionCreators(cartActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
