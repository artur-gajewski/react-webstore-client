import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import './contactForm.css';

class ContactForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form className="contact-form" onSubmit={handleSubmit}>
                <label className="form-label" htmlFor="firstName">First name:</label>
                <Field className="form-input" name="firstName" component="input" type="text"/>

                <label className="form-label" htmlFor="lastName">Last name:</label>
                <Field className="form-input" name="lastName" component="input" type="text"/>

                <label className="form-label" htmlFor="email">Email:</label>
                <Field className="form-input" name="email" component="input" type="email"/>

                <label className="form-label" htmlFor="streetAddress">Street address:</label>
                <Field className="form-input" name="streetAddress" component="input" type="text"/>

                <label className="form-label" htmlFor="zipCode">Zip code:</label>
                <Field className="form-input" name="zipCode" component="input" type="text"/>

                <label className="form-label" htmlFor="city">City:</label>
                <Field className="form-input" name="city" component="input" type="text"/>

                <label className="form-label" htmlFor="country">Country:</label>
                <Field className="form-input" name="country" component="input" type="text"/>

                <button className="form-submit-button" type="submit">Send order</button>
            </form>
        );
    }
}

// Decorate the form component
ContactForm = reduxForm({
    form: 'contact' // a unique name for this form
})(ContactForm);

export default ContactForm;
