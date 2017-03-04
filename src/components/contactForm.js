import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Icon } from 'react-fa';
import './contactForm.css';

class ContactForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <label className="form-label" htmlFor="firstName">First name:</label>
                    <Field className="form-input" name="firstName" component="input" type="text"/>
                </div>
                <div className="form-row">
                    <label className="form-label" htmlFor="lastName">Last name:</label>
                    <Field className="form-input" name="lastName" component="input" type="text"/>
                </div>
                <div className="form-row">
                    <label className="form-label" htmlFor="email">Email:</label>
                    <Field className="form-input" name="email" component="input" type="email"/>
                </div>
                <div className="form-row">
                    <label className="form-label" htmlFor="streetAddress">Street address:</label>
                    <Field className="form-input" name="streetAddress" component="input" type="text"/>
                </div>
                <div className="form-row">
                    <label className="form-label" htmlFor="zipCode">Zip code:</label>
                    <Field className="form-input" name="zipCode" component="input" type="text"/>
                </div>
                <div className="form-row">
                    <label className="form-label" htmlFor="city">City:</label>
                    <Field className="form-input" name="city" component="input" type="text"/>
                </div>
                <div className="form-row">
                    <label className="form-label" htmlFor="country">Country:</label>
                    <Field className="form-input" name="country" component="input" type="text"/>
                </div>
                <div className="form-options">
                    <button className="form-submit-button" type="submit">
                        <Icon name="check-square-o" />
                        &nbsp;&nbsp;
                        Send order
                    </button>
                </div>
            </form>
        );
    }
}

// Decorate the form component
ContactForm = reduxForm({
    form: 'contact' // a unique name for this form
})(ContactForm);

export default ContactForm;
