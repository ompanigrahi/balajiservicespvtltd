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
      x: -300,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });
  });

  return (
    <>
      <div
        className="flex justify-center items-center h-screen bg-cover bg-center bg-green-100 relative"
        style={{ backgroundImage: "url('/images/garden-bg.jpg')" }}
      >
        <div
          ref={Left}
          className="text-center p-10 rounded-lg mt-20 w-2/3 sm:w-3/4 md:w-1/2 lg:w-1/3"
        >
          <h1 className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase text-white drop-shadow-lg">
            Balaji <br /> Services
          </h1>
          <h3 className="text-xl sm:text-lg md:text-2xl mt-4 text-gray-200">
            Five Star Garden Service Provider
          </h3>
          <div className="mt-4">
            <img src="/images/ratingstar.jpg" alt="Rating" className="mx-auto scale-125 sm:scale-100" />
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