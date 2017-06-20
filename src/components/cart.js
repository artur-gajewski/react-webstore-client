import React, { Component } from 'react';
import styled from 'styled-components';
import { Icon } from 'react-fa';
import ContactForm from './contactForm';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.onRemoveProductFromCart = this.onRemoveProductFromCart.bind(this);
        this.state = this.props.state;
    }

    onRemoveProductFromCart(product) {
        this.props.removeProduct(product);
    }

    handleSubmit = (shippingAddressValues) => {
        console.log(shippingAddressValues);
        alert("Thank you, your order has been received.");
    }

    render() {
        const totalPrice = this.props.selectedProducts.reduce( (prev, curr) => prev + curr.price, 0 ).toFixed(2);

        const productsSelected = this.props.selectedProducts.map((product, idx) => {
            const productPrice = product.price.toFixed(2);

            return (
                <ProductContainer key={idx}>
                    <ProductPhotoContainer>
                        <ProductPhoto role="presentation" src={product.imageUrl} />
                    </ProductPhotoContainer>
                    <ProductInformation>
                        <div>
                            {product.title}
                        </div>
                        <ProductId>
                            <div>
                                Product ID: {product.productId}
                            </div>
                            <ProductSpecs>
                                {product.specs}
                            </ProductSpecs>
                        </ProductId>
                    </ProductInformation>
                    <ProductOptions>
                        <div>
                            {productPrice} €
                        </div>
                        <RemoveButton title="Remove this product" onClick={() => this.onRemoveProductFromCart(idx)}>
                            <Icon name="trash" />
                            &nbsp;&nbsp;
                            Remove
                        </RemoveButton>
                    </ProductOptions>
                </ProductContainer>
            );
        });

        return (
            <CartSection>
                <CartInfo>
                    <Icon name="shopping-cart" />
                    &nbsp;&nbsp;
                    Your shopping cart
                </CartInfo>
                <TotalPrice>
                    Total price: {totalPrice} €
                </TotalPrice>
                <CartContainer>
                    <CartItems>
                        {productsSelected}
                    </CartItems>
                </CartContainer>
                <ContactFormConatiner>
                    <FormInfo>
                        <Icon name="address-card-o" />
                        &nbsp;&nbsp;
                        Shipping address
                    </FormInfo>
                    <ContactForm onSubmit={this.handleSubmit} />
                </ContactFormConatiner>
            </CartSection>
        );
    }
}

const ProductContainer = styled.div`
    display: flex;
    margin-bottom: 10px;
    border: 1px solid #ccc;

    @media ( max-width: 630px ) {
        flex-direction: column;
    }
`;

const ProductData = styled.div`
    padding: 20px;
    min-width: 120px;
`;

const ProductPhotoContainer = styled.div`
    min-width: 140px;
`;

const ProductPhoto = styled.img`
    padding: 20px;
    max-height: 120px;
    max-width: 120px;
    display: block;
    margin-left: auto;
    margin-right: auto;

    @media ( max-width: 630px ) {
        height: auto;
        max-width: 250px;
        max-height: 300px;
        border-right: 0px;
        justify-content: flex-start; /* align horizontal */
        align-items: flex-start; /* align vertical */
        min-width: 125px;
        padding-bottom: 0px;
    }
`;

const ProductInformation = styled(ProductData)`
    margin-top: 3px;
    margin-bottom: 10px;

    @media ( max-width: 630px ) {
        padding-bottom: 0px;
    }
`;

const ProductId = styled.div`
    color: #777;
    font-size: 12px;
    margin-top: 5px;
`;

const ProductSpecs = styled.div`
    margin-top: 5px;
`;

const ProductOptions = styled(ProductData)`
    flex: 1;
    justify-content: center; /* align horizontal */
    min-width: 120px;
`;

const RemoveButton = styled.button`
    font-size: 15px;
    font-weight: 200;
    margin-top: 5px;
`;

const CartSection = styled.section`
    padding: 20px;
    background-color: #FFF;
    box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.25);
`;

const CartInfo = styled.div`
    font-size: 25px;
    font-weight: 200;
    margin-bottom: 20px;
`;

const TotalPrice = styled.div`
    margin-bottom: 20px;
`;

const CartContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const CartItems = styled.div`
    flex-grow: 1;
`;

const ContactFormConatiner = styled.div`
    margin-top: 20px;
`;

const FormInfo = styled.div`
    font-size: 25px;
    font-weight: 200;
    margin-bottom: 20px;
`;

export default Cart;
