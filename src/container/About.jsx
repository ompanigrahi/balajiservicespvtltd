import React from "react";
import { Helmet } from "react-helmet"; // Use react-helmet instead of react-helmet-async
import Footer from "../components/footer";

const About = () => {
  return (
    <div className="flex flex-col mt-16 justify-between min-h-screen bg-green-100 text-center">
      {/* SEO Metadata */}
      <Helmet>
        <title>About Balaji Services - Expert Garden & Home Care</title>
        <meta
          name="description"
          content="Learn more about Balaji Services, your trusted partner for top-tier home and garden maintenance solutions."
        />
        <meta
          name="keywords"
          content="Balaji Services, gardening services, home care, landscaping, maintenance"
        />
      </Helmet>

      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold py-8 text-green-900">
        About Balaji Services - Expert Garden & Home Care
      </h1>

      {/* Content */}
      <div className="flex flex-wrap justify-center items-center gap-12 px-6 pb-10">
        {/* Image */}
        <img
          src="/images/garden123.png"
          alt="Lush Green Garden Maintained by Balaji Services"
          className="w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-lg"
        />

        {/* Text */}
        <div className="w-full md:w-1/2 lg:w-1/3 text-left text-green-900">
          <h2 className="text-2xl font-bold mb-4">Welcome to Balaji Services</h2>
          <p className="text-lg leading-7">
            <strong className="text-green-800 underline">Balaji Services</strong> is your trusted partner for top-tier home and garden maintenance solutions. Our experienced team provides tree cutting for safety and beauty, house coloring for a refreshed appearance, and housekeeping for a pristine home. We also specialize in plot cleaning, garden maintenance, and grass cutting, ensuring a well-groomed and healthy landscape.
          </p>
          <p className="text-lg leading-7 mt-4">
            With a commitment to excellence, efficiency, and customer satisfaction, Balaji Services guarantees high-quality services tailored to your needs. Let us help you create a clean, vibrant, and organized living environment.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default About;
