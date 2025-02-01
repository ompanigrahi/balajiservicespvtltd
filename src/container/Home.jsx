import React from "react";
import "./Home.css";
import { useState } from "react";
import "swiper/css";
import "swiper/css/scrollbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Page3 from "../components/page3";
import Foter from "../components/footer";
import Page2 from "../components/page2"

function Home() {

  const Left = useRef();
  const right = useRef();
  useGSAP(() => {
    gsap.from(Left.current, {
      x: -500,
      opacity: 0,
      duration: 1,
    });
    gsap.from(right.current, {
      scale: 0,
      opacity: 0,
      duration: 1,
    });
  });

  return (
    <>
      <div className="page1 ">
        <div ref={Left} className="page-left">
          <div>
            <h1>
              balaji <br />
              services
            </h1>
            <h3>five star garden service provider</h3>
          </div>
          <div className="page-left-buttom">
            <img src="/images/ratingstar.jpg" alt="" />
          </div>
        </div>

        <div ref={right} className="page-right">
          <img src="/images/garden.jpg" alt="" />
        </div>
      </div>
      <Page2 />
      <Page3 />
      <Foter />
    </>
  );
}

export default Home;
