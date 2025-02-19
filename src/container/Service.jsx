import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Foter from "../components/footer";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    image: "/images/tree-cutting-01.jpg",
    title: "Tree Cutting",
    description:
      "Our professional tree-cutting service ensures the safe and efficient removal of unwanted or overgrown trees. Whether you need trimming to maintain the health of your trees or complete removal to clear space, we use the latest equipment and techniques to handle the job with precision and care. Keep your property safe and enhance its natural beauty with our expert services.",
  },
  {
    image: "/images/house-colour-02.jpg",
    title: "House Colouring",
    description:
      "Give your home a fresh and vibrant look with our expert house coloring services. We use high-quality paints and skilled techniques to enhance your home’s aesthetic appeal while ensuring long-lasting protection against weather elements. Whether it’s a new coat or a complete color transformation, we guarantee a smooth, flawless finish that will make your house stand out.",
  },
  {
    image: "/images/house-keeping-01.jpg",
    title: "House Keeping",
    description:
      "A clean and organized home is essential for a comfortable lifestyle. Our professional housekeeping services cover everything from dusting and mopping to deep cleaning, ensuring your space remains spotless and inviting. Whether you need regular maintenance or a one-time service, we handle every detail with care, providing a refreshing and hygienic environment for you and your family.",
  },
  {
    image: "/images/plot-cleaning-01.jpg",
    title: "Plot Cleaning",
    description:
      "Clear and maintain your open plots with our efficient plot cleaning services. We remove unwanted debris, weeds, and waste, leaving your space clean and well-prepared for future use. Whether you need a site cleared for construction or simply want a neat and tidy plot, our team ensures thorough and hassle-free cleaning to meet your requirements.",
  },
  {
    image: "/images/garden5.png",
    title: "Garden Maintainence",
    description:
      "Keep your garden lush, healthy, and beautiful with our comprehensive garden maintenance services. We take care of watering, fertilizing, pruning, pest control, and overall upkeep to ensure your outdoor space flourishes all year round. Whether you have a small home garden or a large landscape, we provide expert care tailored to your garden’s needs.",
  },
  {
    image: "/images/grass-cutting-01.jpg",
    title: "Grass Cutting",
    description:
      "Maintain a neat and tidy lawn with our professional grass-cutting services. Overgrown grass can make your space look unkempt and attract pests, but our team ensures precise trimming for a well-manicured finish. Using advanced equipment, we cut grass efficiently, keeping your lawn healthy and enhancing the beauty of your outdoor space.",
  },
];

function Page2() {
  useEffect(() => {
    gsap.utils.toArray(".section").forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, scale: 0.8, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "linear",
          scrollTrigger: {
            trigger: section,
            start: "top 90%",
            end: "top 40%",
            scrub: 1,
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <>
    <div className="min-h-screen w-full flex flex-col gap-10 bg-green-200">
      <h1 className="text-4xl md:text-5xl lg:text-7xl text-gray-100 font-bold text-center p-5 uppercase mt-20 drop-shadow-md">
        Our Services
      </h1>
      {services.map((service, index) => (
        <div
          key={index}
          className={`section flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center w-full`}
        >
          <div className="w-full md:w-1/2 p-5">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-auto rounded-md shadow-lg"
            />
          </div>
          <div className="w-full md:w-2/5 flex flex-col gap-4 items-center text-center px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold drop-shadow-md">
              {service.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-700">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
    <Foter />
    </>
  );
}

export default Page2;