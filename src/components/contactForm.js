import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Icon } from 'react-fa';
import styled from 'styled-components';

class ContactForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <Form onSubmit={handleSubmit}>
                <FormRow>
                    <Label htmlFor="firstName">First name:</Label>
                    <Input name="firstName" component="input" type="text"/>
                </FormRow>
                <FormRow>
                    <Label htmlFor="lastName">Last name:</Label>
                    <Input name="lastName" component="input" type="text"/>
                </FormRow>
                <FormRow>
                    <Label htmlFor="email">Email:</Label>
                    <Input name="email" component="input" type="email"/>
                </FormRow>
                <FormRow>
                    <Label htmlFor="streetAddress">Street address:</Label>
                    <Input name="streetAddress" component="input" type="text"/>
                </FormRow>
                <FormRow>
                    <Label htmlFor="zipCode">Zip code:</Label>
                    <Input name="zipCode" component="input" type="text"/>
                </FormRow>
                <FormRow>
                    <Label htmlFor="city">City:</Label>
                    <Input name="city" component="input" type="text"/>
                </FormRow>
                <FormRow>
                    <Label htmlFor="country">Country:</Label>
                    <Input name="country" component="input" type="text"/>
                </FormRow>
                <FormRow>
                    <SubmitButton type="submit">
                        <Icon name="check-square-o" />
                        &nbsp;&nbsp;
                        Send order
                    </SubmitButton>
                </FormRow>
            </Form>
        );
    }
}

// Decorate the form component
ContactForm = reduxForm({
    form: 'contact' // a unique name for this form
})(ContactForm);

const Form = styled.form`
    display: flex;
    flex-flow: column wrap;
`;

const FormRow = styled.div`
    display: flex;
    flex-grow: 1;
    height: 20px;
    margin-bottom: 10px;

    @media ( max-width: 700px ) {
        display: flex;
        flex-direction: column;
        height: 40px;
    }
`;

const Label = styled.label`
    flex: 1;
`;

const Input = styled(Field)`
    flex: 4;
`;

const SubmitButton = styled.button`
    margin-top: 15px;
    font-size: 15px;
    font-weight: 200;

    @media ( min-width: 700px ) {
        height: 25px;
    }
`;


export default ContactForm;
