// ContactUs.js
import React from 'react';
import './Contact.css';

const ContactUs = () => {
    return (
        <div className="contact-container">
            <div className="map-container">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509649!2d144.9537353153167!3d-37.81627997975145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11c7a5%3A0x5045675218ceed30!2sYour%20Business%20Name%20Here!5e0!3m2!1sen!2sau!4v1616161616161" 
                    width="600" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy">
                </iframe>
                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <p>Phone: +123456789</p>
                    <p>Email: info@example.com</p>
                    <p>Address: 123 Example St, City, Country</p>
                </div>
            </div>
            <form className="contact-form">
                <h2>Contact Us</h2>
                <input type="text" placeholder="Name" required />
                <input type="tel" placeholder="Phone No." required />
                <select required>
                    <option value="">Select Service</option>
                    <option value="service1">Service 1</option>
                    <option value="service2">Service 2</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;
