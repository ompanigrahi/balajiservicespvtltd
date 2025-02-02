import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import './page3.css'
import "swiper/css";
import "swiper/css/pagination";

const Page3 = () => {
  const testimonials = [
    {
      name: "Rahul Yadav",
      data: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur ratione explicabo quisquam omnis, dolores suscipit, ipsa culpa, aperiam doloremque excepturi facilis saepe esse exercitationem nihil tenetur sed quas deleniti maiores.",
    },
    {
      name: "Tushar Ranjan Sahu",
      data: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur ratione explicabo quisquam omnis, dolores suscipit, ipsa culpa, aperiam doloremque excepturi facilis saepe esse exercitationem nihil tenetur sed quas deleniti maiores.",
    },
    {
      name: "Rohan Kumar Bag",
      data: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur ratione explicabo quisquam omnis, dolores suscipit, ipsa culpa, aperiam doloremque excepturi facilis saepe esse exercitationem nihil tenetur sed quas deleniti maiores.",
    },
  ];

  return (
    <div className="testimonial h-[80vh] w-full bg-[#aad5aa] flex flex-col justify-center items-center py-10">
      <h1 className="text-7xl font-bold text-white uppercase">Testimonials</h1>

      <div className="relative w-1/2 mt-16">
        <Swiper
          className="h-4/5 rounded-md"
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={1}
          centeredSlides={true}
          pagination={{ clickable: true, el: ".custom-pagination" }}
        >
          {testimonials.map((text, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col justify-center items-center bg-[#7dae7d] rounded-md px-8 py-6 h-full text-center font-semibold text-white"
            >
              <p className="mb-4">"{text.data}"</p>
              <h2 className="text-3xl font-semibold">"{text.name}"</h2>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination mt-6 flex justify-center"></div>
      </div>
    </div>
  );
};

export default Page3;
