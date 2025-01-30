import React from "react";

const ContactUs = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-col min-h-screen bg-green-100">
        <div className="flex-grow p-8">
          {/* Page Title */}
          <h2 className="text-center text-4xl font-extrabold text-gray-700 mb-8">
            CONTACT US
          </h2>

          {/* 4-Grid Layout */}
          <div className="grid grid-cols-2 grid-rows-2 gap-6 h-[70vh]">
            {/* Top Left - Phone & Email */}
            <div className="p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                Phone No.
              </h3>
              <p className="text-xl text-gray-600 mb-2">📞 98474 67833</p>
              {/* <p className="text-xl text-gray-600 mb-4">💬 33333 44444</p> */}
              <h3 className="text-2xl font-bold text-gray-700 mb-2">Email:</h3>
              <p className="text-xl text-gray-600">📧 amarmanna867@gmail.com</p>
            </div>

            {/* Top Right - Contact Form */}
            <div className="p-6 flex flex-col justify-center">
              <form className="w-4/5 mx-auto bg-opacity-0">
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold">
                    Your Name:
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded bg-transparent"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold">
                    Phone No.:
                  </label>
                  <input
                    type="tel"
                    className="w-full p-2 border rounded bg-transparent"
                    placeholder="Enter phone number"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold">
                    Services Chosen:
                  </label>
                  <select
                    className="w-full p-2 border rounded bg-transparent"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="service1">Service 1</option>
                    <option value="service2">Service 2</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold">
                    Address:
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded bg-transparent"
                    placeholder="Enter address"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded w-full"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Bottom Left - Map */}
            <div className="p-6 flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1057.2784805339643!2d76.32201937386047!3d9.952206800927343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNTcnMDcuNCJOIDc2wrAxOScxOS43IkU!5e1!3m2!1sen!2sin!4v1738256481507!5m2!1sen!2sin"
                width="100%"
                height="300"
                className="border-2 rounded-lg"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* Bottom Right - Address */}
            <div className="p-6 flex items-center justify-end">
              <div className="text-xl font-semibold text-gray-700 text-right">
                <p>ABC,</p>
                <p>DEF,</p>
                <p>7468254</p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Sticky Footer */}
        <footer className="w-full bg-gray-800 text-white py-4 text-center fixed bottom-0 left-0">
          <div className="flex justify-between px-8">
            <span>© Copyright Reserved</span>
            <span>Designed by dhanazaweb</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ContactUs;
