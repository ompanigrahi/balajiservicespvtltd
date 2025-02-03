import React, { useEffect } from "react";
import "./page2.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    image: "/images/garden1.png",
    title: "Garden Maintenance",
    description:
      "We provide top-notch garden maintenance to keep your outdoor space beautiful and healthy.",
  },
  {
    image: "/images/garden2.png",
    title: "Lawn Care",
    description:
      "Our lawn care services ensure lush, green, and well-maintained grass throughout the year.",
  },
  {
    image: "/images/garden3.png",
    title: "Planting & Landscaping",
    description:
      "Transform your garden with our expert planting and landscaping services.",
  },
  {
    image: "/images/garden4.png",
    title: "Irrigation Systems",
    description:
      "We install and maintain efficient irrigation systems to keep your plants hydrated.",
  },
  {
    image: "/images/garden5.png",
    title: "Tree Trimming",
    description:
      "Professional tree trimming services to enhance the beauty and health of your trees.",
  },
  {
    image: "/images/garden6.png",
    title: "Garden Design",
    description:
      "Create a stunning garden with our custom design services tailored to your preferences.",
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
            end: "top 40%", // Ends when it reaches closer to the top
            scrub: 1,
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <>
    <div className="service h-fit w-full flex flex-col gap-10 bg-[#aad5aa]">
      <h1 className="text-7xl text-[#f3f6f3] font-bold text-center p-5 uppercase mt-20">our services</h1>
      {services.map((service, index) => (
        <div
          key={index}
          className={`section h-[70vh] w-full flex ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <div className="h-full w-1/2 p-5">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full rounded-md"
            />
          </div>
          <div className="py-5 w-2/5 overflow-hidden flex flex-col gap-4 items-center mt-20">
            <h2 className="text-7xl text-[#fefffe] font-bold text-center">{service.title}</h2>
            <p className="text-center t-xl text-[#3e3c3c]">{service.description}</p>
          </div>
        </div>
      ))}
    </div>

    </>
  );
}

export default Page2;
