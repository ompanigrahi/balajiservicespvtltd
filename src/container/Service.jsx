import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
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
    alt: "Professional tree cutting service at Balaji Services",
  },
  {
    image: "/images/house-colour-02.jpg",
    title: "House Colouring",
    description:
      "Give your home a fresh and vibrant look with our expert house coloring services. We use high-quality paints and skilled techniques to enhance your home’s aesthetic appeal while ensuring long-lasting protection against weather elements. Whether it’s a new coat or a complete color transformation, we guarantee a smooth, flawless finish that will make your house stand out.",
    alt: "Expert house coloring service by Balaji Services",
  },
  {
    image: "/images/house-keeping-01.jpg",
    title: "House Keeping",
    description:
      "A clean and organized home is essential for a comfortable lifestyle. Our professional housekeeping services cover everything from dusting and mopping to deep cleaning, ensuring your space remains spotless and inviting. Whether you need regular maintenance or a one-time service, we handle every detail with care, providing a refreshing and hygienic environment for you and your family.",
    alt: "Professional housekeeping service by Balaji Services",
  },
  {
    image: "/images/plot-cleaning-01.jpg",
    title: "Plot Cleaning",
    description:
      "Clear and maintain your open plots with our efficient plot cleaning services. We remove unwanted debris, weeds, and waste, leaving your space clean and well-prepared for future use. Whether you need a site cleared for construction or simply want a neat and tidy plot, our team ensures thorough and hassle-free cleaning to meet your requirements.",
    alt: "Efficient plot cleaning service by Balaji Services",
  },
  {
    image: "/images/garden5.png",
    title: "Garden Maintenance",
    description:
      "Keep your garden lush, healthy, and beautiful with our comprehensive garden maintenance services. We take care of watering, fertilizing, pruning, pest control, and overall upkeep to ensure your outdoor space flourishes all year round. Whether you have a small home garden or a large landscape, we provide expert care tailored to your garden’s needs.",
    alt: "Garden maintenance service by Balaji Services",
  },
  {
    image: "/images/grass-cutting-01.jpg",
    title: "Grass Cutting",
    description:
      "Maintain a neat and tidy lawn with our professional grass-cutting services. Overgrown grass can make your space look unkempt and attract pests, but our team ensures precise trimming for a well-manicured finish. Using advanced equipment, we cut grass efficiently, keeping your lawn healthy and enhancing the beauty of your outdoor space.",
    alt: "Professional grass cutting service at Balaji Services",
  },
];

function Page2() {
  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>Our Services - Professional Home & Garden Care | Balaji Services</title>
        <meta
          name="description"
          content="Discover Balaji Services' top-quality home and garden maintenance solutions, including tree cutting, house coloring, housekeeping, plot cleaning, garden maintenance, and grass cutting."
        />
        <meta
          name="keywords"
          content="tree cutting, house painting, housekeeping, plot cleaning, garden maintenance, grass cutting, Balaji Services"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Our Services - Balaji Services" />
        <meta
          property="og:description"
          content="Explore our expert home and garden services, including tree cutting, house coloring, and lawn care."
        />
        <meta property="og:image" content="/images/garden5.png" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen w-full flex flex-col bg-[#b9d9b9]">
        <h1 className="text-4xl md:text-5xl lg:text-7xl text-gray-100 font-bold text-center p-5 uppercase mt-24 drop-shadow-md">
          Our Services
        </h1>

        <div className="card h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 px-16 py-8 pb-20 place-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative h-[70vh] rounded-lg w-96 bg-white overflow-hidden group shadow-lg"
            >
              <img
                src={service.image}
                alt={service.alt}
                className="absolute inset-0 h-full w-full object-cover z-0"
              />

              <div
                className="absolute inset-0 bg-black/40 flex flex-col justify-start text-white z-9 px-6 hover:py-8 text-center
                translate-y-[85%] group-hover:translate-y-0 transition-all duration-500 ease-in-out"
              >
                <h2 className="text-3xl font-bold">{service.title}</h2>
                <p className="hidden group-hover:block text-sm mt-3 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Foter />
    </>
  );
}

export default Page2;
