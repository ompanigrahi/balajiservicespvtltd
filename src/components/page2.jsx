import React from "react";
import "./page2.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Controller, Scrollbar } from "swiper/modules";
// import { useState } from "react";

function page2() {
  //   const [firstSwiper, setFirstSwiper] = useState(null);
  //   const [secondSwiper, setSecondSwiper] = useState(null);
  return (
    <>
      {/* <div className="page-2 h-screen w-full flex">
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
      </div> */}

      <div className="service h-fit w-full flex flex-col gap-10">
        <h1 className="text-3xl font-bold text-center p-5 uppercase">
          We Offers
        </h1>
        <div className="h-[70vh] w-full bg-slate-200 flex">
          <div className="h-full w-3/5 bg-slate-300 p-5">
            <img
              src="/images/garden.jpg"
              alt=""
              className="w-full h-full rounded-md"
            />
          </div>
          <div className="py-5 w-2/5 overflow-hidden flex flex-col gap-4">
            <h2 className="text-5xl font-bold">
                Garden Care
            </h2>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos itaque omnis fugit incidunt veniam, ducimus mollitia distinctio neque illum numquam laborum excepturi atque aliquid quia reiciendis dolorum! Recusandae, nesciunt quia.
            </p>
          </div>
        </div>

        <div className="h-[70vh] w-full bg-slate-200 flex">
        <div className="py-5 w-2/5 overflow-hidden flex flex-col gap-4">
            <h2 className="text-5xl font-bold">
                Garden Care
            </h2>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos itaque omnis fugit incidunt veniam, ducimus mollitia distinctio neque illum numquam laborum excepturi atque aliquid quia reiciendis dolorum! Recusandae, nesciunt quia.
            </p>
          </div>
          <div className="h-full w-3/5 bg-slate-300 p-5">
            <img
              src="/images/garden.jpg"
              alt=""
              className="w-full h-full rounded-md"
            />
          </div>
        </div>

      </div>
    </>
  );
}

export default page2;
