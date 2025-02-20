import React, { useState } from "react";
import Foter from "../components/footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    address: "",
  });

  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(`${backendURL}/send-message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", phone: "", service: "", address: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending message.");
    }
  };

  return (
    <>
      <div className="min-h-screen lg:mt-16 bg-green-100 flex flex-col items-center py-10 px-5 md:px-20">
        <h2 className="text-4xl font-extrabold text-gray-700 text-center mb-10">CONTACT US</h2>

        <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
          {/* Contact Info */}
          <div className="space-y-4 text-lg text-gray-700">
            <div>
              <h3 className="font-bold">Phone No.</h3>
              <p>📞 98474 67833</p>
            </div>
            <div>
              <h3 className="font-bold">Email:</h3>
              <p>📧 amarmanna867@gmail.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg w-full">
            <div className="mb-4">
              <label className="block font-semibold">Your Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
            </div>
            <div className="mb-4">
              <label className="block font-semibold">Phone No.:</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
            </div>
            <div className="mb-4">
              <label className="block font-semibold">Services Chosen:</label>
              <select name="service" value={formData.service} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required>
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
              <label className="block font-semibold">Address:</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mt-1" required />
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
          ></iframe>
        </div>

        {/* Address */}
        <div className="text-center text-lg font-semibold text-gray-700 mt-6">
          <p>
            Balaji Services
            <br /> Near EVM Volkswagen, Cochin
            <br /> 682304
          </p>
        </div>
      </div>
      <Foter />
    </>
  );
};

export default ContactUs;
