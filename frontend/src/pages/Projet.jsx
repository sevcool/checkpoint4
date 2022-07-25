import { useRef, useState } from "react";
import Navbar from "@components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "@pages/style.css";
import "swiper/css/bundle";
import { EffectCube, Pagination } from "swiper";
import wcs from "@assets/images/wcsprime.png";
import wild from "@assets/images/Wildcodeschool.png";
import hd from "@assets/images/hdebenisterie.png";

export default function Projet() {
  return (
    <>
      <Navbar />
      <Swiper
        effect="cube"
        grabCursor
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 50,
          shadowScale: 0.98,
        }}
        pagination
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={wcs} alt="wcsprime" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={wild} alt="wildcodeschool" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hd} alt="hdebenisterie" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
