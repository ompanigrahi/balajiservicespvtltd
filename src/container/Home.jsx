import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Helmet } from "react-helmet";
import Page3 from "../components/page3";
import Foter from "../components/footer";
import Page2 from "../components/page2";

function Home() {
  const Left = useRef();

  useGSAP(() => {
    gsap.from(Left.current, {
      opacity: 0,
      scale: 0,
      duration: 3,
      ease: "power3.out",
    });
  });

  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>Balaji Services - Five Star Garden Service Provider</title>
        <meta name="description" content="Balaji Services provides top-quality gardening and landscaping services. Transform your outdoor space with our expert solutions." />
        <meta name="keywords" content="gardening services, landscaping, lawn care, garden maintenance, professional gardeners,plot cleaning,home colouring,tree cutting,house keeping " />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Balaji Services - Five Star Garden Service Provider" />
        <meta property="og:description" content="Transform your garden with Balaji Services' expert gardening and landscaping solutions." />
        <meta property="og:image" content="/images/garden-bg.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="relative h-[90vh] md:h-screen flex justify-center items-center">
        <img
          src="/images/hero.jpg"
          alt="Beautiful garden maintained by Balaji Services"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-9 bg-black/40 w-full h-[75vh] md:h-screen">
          <div
            ref={Left}
            className="relative text-center p-10 rounded-lg mt-10 md:mt-20 lg:mt-32 w-full h-[80vh] flex flex-col justify-center items-center"
          >
            <h1 className="text-6xl sm:text-5xl md:text-6xl lg:text-[6rem] font-[400] uppercase text-white drop-shadow-lg">
              Balaji Services
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-5xl tracking-wide mt-4 text-gray-200">
              Five Star Garden Service Provider
            </h2>
            <div className="object-cover -translate-y-12 md:-translate-y-8">
              <img
                src="/images/ratingstar.jpg"
                alt="Five-star rating for Balaji Services"
                className="mx-auto scale-125 sm:scale-100 lg:scale-150"
                loading="lazy"
              />
            </div>
            <div>
              <button  className="bg-[#28A31599] -translate-y-14 md:-translate-y-10 font-[Merriweather] text-white text-xl py-5 px-12 tracking-[.10rem] rounded-[50px]">Learn More</button>
            </div>
          </div>
        </div>
      </div>

      <Page2 />
      <Page3 />
      <Foter />
    </>
  );
}

export default Home;
