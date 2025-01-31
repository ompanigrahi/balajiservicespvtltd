import React from "react";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Controller, Scrollbar } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/scrollbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Page3 from "../components/page3";
import Foter from "../components/footer"

function Home() {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

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

  const imageArray = [
    "/images/HOUSEKEEPING2.png",
    "/images/planttrimming2.png",
    "/images/planttrimming3.png",
    "/images/garden2.png",
  ];

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

      <div className="page-2 h-screen w-full flex">
        {/* Left Swiper */}
        <div className="page-2-left h-screen w-1/2">
          <Swiper
            className="h-full w-full"
            modules={[Autoplay, Controller]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={0}
            slidesPerView={1}
            onSwiper={setFirstSwiper}
            controller={{ control: secondSwiper }}
          >
            <SwiperSlide>
              <img
                src="/images/HOUSEKEEPING2.png"
                alt="Housekeeping"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/planttrimming2.png"
                alt="Plant Trimming"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/planttrimming3.png"
                alt="Plant Trimming 3"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/garden2.png"
                alt="Garden"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/HP1.png"
                alt="HP1"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Right Swiper */}
        <div className="page-2-right h-screen w-1/2">
          <Swiper
            className="h-full w-full"
            modules={[Autoplay, Controller]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={0}
            slidesPerView={1}
            onSwiper={setSecondSwiper} // Set second swiper instance
            controller={{ control: firstSwiper }} // Link to first swiper
          >
            <SwiperSlide>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              eius autem repudiandae et quis quibusdam delectus non aspernatur
              nulla in.
            </SwiperSlide>

            <SwiperSlide>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum maxime dolor sit porro voluptas nesciunt neque incidunt
              aliquam. Nobis, corrupti?
            </SwiperSlide>

            <SwiperSlide>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              recusandae ea, fuga molestias cumque hic maxime officiis facilis
              repellat adipisci.
            </SwiperSlide>

            <SwiperSlide>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde,
              necessitatibus ipsam laborum quos exercitationem error fugiat
              harum placeat perferendis dolor!
            </SwiperSlide>

            <SwiperSlide>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              minima tempora sint rerum, nesciunt repellat! Tempora in magni
              unde odit.
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <Page3 />
      <Foter />
    </>
  );
}

export default Home;
