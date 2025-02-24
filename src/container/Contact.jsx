import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    const staticPart = "https://wa.me/8455975766?text=";
    const dynamicPart = `Name: ${formData.name} Phone No: ${formData.phone} Service Chosen: ${formData.service} Address: ${formData.address}`;
    const url = `${staticPart}${encodeURIComponent(dynamicPart)}`;
    
    window.open(url, "_blank");
  };

  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>Contact Balaji Services - Get In Touch for Gardening & Cleaning</title>
        <meta name="description" content="Contact Balaji Services for professional gardening, house cleaning, and landscaping. Call us now or fill out the form to get started!" />
        <meta name="keywords" content="contact gardening services, landscaping, house cleaning, garden maintenance, tree trimming" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact Balaji Services - Get In Touch for Gardening & Cleaning" />
        <meta property="og:description" content="Need expert gardening or cleaning services? Contact Balaji Services today!" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen lg:mt-16 bg-green-100 flex flex-col items-center py-10 px-5 md:px-20">
        <h1 className="text-4xl font-extrabold text-gray-700 text-center mb-10">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
          {/* Contact Info */}
          <div className="space-y-4 text-lg text-gray-700">
            <div>
              <h2 className="font-bold">Phone No.</h2>
              <a href="tel:+919847467833" className="text-green-600 hover:underline">+91 98474 67833</a>
            </div>
            <div>
              <h2 className="font-bold">Email:</h2>
              <a href="mailto:amarmanna867@gmail.com" className="text-green-600 hover:underline">📧 amarmanna867@gmail.com</a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg w-full">
            <div className="mb-4">
              <label htmlFor="name" className="block font-semibold">Your Name:</label>
              <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block font-semibold">Phone No.:</label>
              <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
            </div>
            <div className="mb-4">
              <label htmlFor="service" className="block font-semibold">Services Chosen:</label>
              <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required>
                <option value="">Select a service</option>
                <option value="Tree Cutting">Tree Cutting</option>
                <option value="House Colouring">House Colouring</option>
                <option value="Garden Maintenance">Garden Maintenance</option>
                <option value="House Keeping">House Keeping</option>
                <option value="Plot Cleaning">Plot Cleaning</option>
                <option value="Tree/Plant Trimming">Tree/Plant Trimming</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block font-semibold">Address:</label>
              <input id="address" type="text" name="address" value={formData.address} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
            </div>
            <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition">Submit</button>
          </form>
        </div>

        {/* Google Map */}
        <div className="w-full max-w-4xl mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1057.2784805339643!2d76.32201937386047!3d9.952206800927343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNTcnMDcuNCJOIDc2wrAxOScxOS43IkU!5e1!3m2!1sen!2sin!4v1738256481507!5m2!1sen!2sin"
            width="100%"
            height="400"
            className="border-2 border-gray-300 rounded-lg"
            allowFullScreen=""
            loading="lazy"
            title="Balaji Services Location"
          ></iframe>
        </div>

        {/* Address */}
        <div className="text-center text-lg font-semibold text-gray-700 mt-6">
          <p>
            <strong>Balaji Services</strong> <br />
            Near EVM Volkswagen, Cochin <br />
            682304
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
