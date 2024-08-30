// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import imagePath from "../../assets/wp9140990.webp";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

export default function Banner() {
  return (
    <>
      <Swiper
        style={{}}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage: `url(${imagePath})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "600px",
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className=" subtitle" data-swiper-parallax="-300">
            We are trusted Company
          </div>
          <div className="title" data-swiper-parallax="-200">
            Trusted Bike{" "}
            <span className="text-[#3ac7ff] font-bold italic">
              Rental Company
            </span>
          </div>
          <div className="text mt-4" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
            </p>
          </div>
          <div className="flex space-x-2 mt-4">
            <button className="bg-[#3ac7ff] text-white rounded-md py-3 px-3">
              Know More
            </button>
            <button className="bg-transparent border-4 border-[#3ac7ff] text-white rounded-md py-3 px-3">
              Details
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" subtitle" data-swiper-parallax="-300">
            We are trusted Company
          </div>
          <div className="title" data-swiper-parallax="-200">
            Trusted Bike{" "}
            <span className="text-[#3ac7ff] font-bold italic">
              Rental Company
            </span>
          </div>
          <div className="text mt-4" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
            </p>
          </div>
          <div className="flex space-x-2 mt-4">
            <button className="bg-[#3ac7ff] text-white rounded-md py-3 px-3">
              Know More
            </button>
            <button className="bg-transparent border-4 border-[#3ac7ff] text-white rounded-md py-3 px-3">
              Details
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" subtitle" data-swiper-parallax="-300">
            We are trusted Company
          </div>
          <div className="title" data-swiper-parallax="-200">
            Trusted Bike{" "}
            <span className="text-[#3ac7ff] font-bold italic">
              Rental Company
            </span>
          </div>
          <div className="text mt-4" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
            </p>
          </div>
          <div className="flex space-x-2 mt-4">
            <button className="bg-[#3ac7ff] text-white rounded-md py-3 px-3">
              Know More
            </button>
            <button className="bg-transparent border-4 border-[#3ac7ff] text-white rounded-md py-3 px-3">
              Details
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
