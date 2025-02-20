import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
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

      <div className="relative h-[75vh] md:h-screen flex justify-center items-center">
        <img
          src="/images/garden-bg.jpg"
          alt="Garden Background"
          className="absolute inset-0 w-full h-full object-cover"
        />


        <div className="relative z-9 bg-black/40 w-full h-[75vh] md:h-screen">
        <div
          ref={Left}
          className="relative text-center p-10  rounded-lg mt-10 md:mt-20 lg:mt-32 w-full h-[80vh] flex flex-col justify-center items-center"
        >
          <h1 className="text-6xl sm:text-5xl md:text-6xl lg:text-8xl font-bold uppercase text-white drop-shadow-lg">
            Balaji <br /> Services
          </h1>
          <h3 className="text-xl sm:text-lg md:text-2xl mt-4 text-gray-200">
            Five Star Garden Service Provider
          </h3>
          <div className="mt-4 object-cover">
            <img src="/images/ratingstar.jpg" alt="Rating" className="mx-auto scale-125 sm:scale-100 lg:scale-150" />
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