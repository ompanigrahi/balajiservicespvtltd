import React from "react";
import Foter from "../components/footer";

const About = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen bg-green-100 text-center">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold py-8 text-green-900">
        ABOUT US
      </h2>
      {/* Content */}
      <div className="flex flex-wrap justify-center items-center gap-12 px-6 pb-10">
        {/* Image */}
        <img
          src="/images/garden123.png"
          alt="Beautiful Garden"
          className="w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-lg"
        />
        {/* Text */}
        <div className="w-full md:w-1/2 lg:w-1/3 text-left text-green-900">
          <h3 className="text-2xl font-bold mb-4">Hello Clients,</h3>
          <p className="text-lg leading-7">
            At <strong className="text-green-800 underline">Balaji Services</strong>, we are
            committed to providing top-quality home and garden services to keep your surroundings clean,
            beautiful, and well-maintained. Our expert team specializes in tree cutting for safety and
            aesthetics, house coloring to refresh your home’s look, and housekeeping for a spotless living
            space. We also offer plot cleaning to clear debris, garden maintenance to nurture your greenery,
            and grass cutting for a well-manicured lawn. With a focus on professionalism, efficiency, and
            customer satisfaction, we ensure every service meets the highest standards, helping you create a
            clean, organized, and visually appealing environment.
          </p>
        </div>
      </div>
      {/* Footer */}
      <footer className="w-full mt-auto">
        <Foter />
      </footer>
    </div>
  );
};

export default About;
