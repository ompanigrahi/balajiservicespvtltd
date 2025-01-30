import React from "react";
import "./Home.css";
import Image from "../images/garden.jpg"
import Star from "../images/ratingstar.jpg"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

function Home() {
const Left = useRef();
const right = useRef()
useGSAP(()=>{
  gsap.from(Left.current,{
    x:-500,
    opacity:0,
    duration:1,

  })
  gsap.from(right.current,{
    scale:0,
    opacity:0,
    duration:1,

  })
})


  return (
    <>
      <div className="page1 ">
        <div ref={Left} className="page-left">
          <div>
            <h1>balaji <br />services</h1>
            <h3>five star garden service provider</h3>
          </div>
          <div className="page-left-buttom">
            <img src={Star} alt="" />
          </div>
        </div>

        <div ref={right} className="page-right">
          <img src={Image} alt="" />
        </div>
      </div>

      {/* pag2 */}
      <div className="page-2 h-screen w-full">

      </div>
    </>
  );
}

export default Home;
