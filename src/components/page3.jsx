import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Page3 = () => {
  const testimonials = [
    {
      name: "Rahul Yadav",
      data: "Our home got a complete makeover thanks to their expert painting services! The colors are vibrant, and the finish is flawless. Highly professional and on time—highly recommended!"
    },
    {
      name: "Priya Sharma",
      data: "I wanted a beautiful garden but had no idea where to start. Their team transformed my backyard into a lush green paradise! Now, I love spending time outdoors."
    },
    {
      name: "Ananya Rao",
      data: "Keeping up with household chores was a nightmare, but their housekeeping service has been a game-changer! My home has never felt cleaner and fresher."
    },
    {
      name: "Kunal Verma",
      data: "From painting to gardening and even housekeeping, they took care of everything! Our home has never looked better. Professional, efficient, and worth every penny!"
    },
    {
      name: "Deepak Nair",
      data: "We had an old tree that was becoming a safety hazard. Their team handled it professionally and safely, leaving our space neat and tidy. Great service!"
    },
  ];

  return (
    <div className="h-[50vh] lg:h-[75vh] w-full bg-[#647164] flex flex-col justify-center items-center py-10 px-4 relative">
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white uppercase text-center drop-shadow-lg">
        Testimonials
      </h1>

      <div className="relative w-full md:w-3/4 lg:w-1/2 mt-10">
        <Swiper
          className="h-full rounded-lg bg-[#535753] p-5"
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={1}
          centeredSlides={true}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              if (index < 3) {
                return `<span class="${className} custom-pagination-dot"></span>`;
              }
              return "";
            },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {testimonials.map((text, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col justify-center items-center rounded-lg px-6 py-8 text-center text-white font-semibold"
            >
              <p className="mb-4 text-md md:text-lg">"{text.data}"</p>
              <h2 className="text-2xl md:text-3xl font-semibold">-{text.name}</h2>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden md:flex items-center gap-6 mt-6">
        <button className="swiper-button-prev bg-white p-4 rounded-full cursor-pointer z-20 shadow-lg hover:bg-gray-200 transition duration-300">
          <FaAngleLeft className="h-6 w-6 text-gray-800" />
        </button>
        <button className="swiper-button-next bg-white p-4 rounded-full cursor-pointer z-20 shadow-lg hover:bg-gray-200 transition duration-300">
          <FaAngleRight className="h-6 w-6 text-gray-800" />
        </button>
      </div>
    </div>
  );
};

export default Page3;