import React, { useState } from 'react';

function ContactForm() {
    // manage form data, empty out the initialize values
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // deconstructing the formState object into it's named properties
    const { name, email, message } = formState;

    function handleChange(e) {
        // setFormState is updating formState for the property
        setFormState({...formState, [e.target.name]: e.target.value })
    }
    // console.log(formState);

    // form submit 
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

return (
    <section>
        <h1>Contact Me</h1>
        <form id="contact-form">
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" defaultValue={name} onChange={handleChange} name="name" />
            </div>
            <div>
                <label htmlFor="email">Email address:</label>
                <input type="email" defaultValue={email} onChange={handleChange} name="email" />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
            </div> 
            <button type="submit" onSubmit={handleSubmit}>Submit</button>
        </form>
    </section>
    );
}
    
export default ContactForm;