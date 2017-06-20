import React, { Component } from 'react';
import styled from 'styled-components';
import AlertContainer from 'react-alert';

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
                <ProductCard key={product.productId}>
                    <ProductImageContainer>
                        <ProductImage role="presentation" src={product.imageUrl} />
                    </ProductImageContainer>
                    <ProductInfo>
                        <h5>{product.title}</h5>
                        <h6>{product.price.toFixed(2)} €</h6>
                        <h7>
                            <AddButton onClick={() => this.onAddProductToCart(product)}> Add to cart </AddButton>
                        </h7>
                    </ProductInfo>
                </ProductCard>
            );
        });

        return (
            <Products>
                <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
                {shelfItems}
            </Products>
        );
    }
}

const ProductCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    flex: 1 16%;
    background-color: #FFF;
    box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.25);

    @media ( max-width: 920px ) {
        flex: 1 21%;
    }

    @media ( max-width: 600px ) {
	    flex: 1 46%;
    }
`;

const ProductImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProductImage = styled.img`
    max-width: 200;
    max-height: 200px;
`;

const ProductInfo = styled.div`
    margin-top: auto;
    padding-top: 20px;
    text-align: center;
`;

const AddButton = styled.button`
    margin-top: 10px;
    font-size: 15px;
`;

const Products = styled.section`
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
`;

export default Shelf;
