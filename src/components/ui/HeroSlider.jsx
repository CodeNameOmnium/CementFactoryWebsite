"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade"; // Fade effect stilini de ekle

import "./SwipperTheme.scss";

// import required modules
import {
  Parallax,
  Pagination,
  Navigation,
  Autoplay,
  EffectFade,
} from "swiper/modules"; // EffectFade modülünü ekle
import Image from "next/image";

export default function HeroSlider({ slidelist, containerClass, itemClass }) {
  return (
    <Swiper
      speed={3000}
      effect="fade" // Effect fade olarak ayarlandı
      fadeEffect={{ crossFade: true }} // CrossFade özelliği isteğe bağlı
      parallax={true}
      navigation={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Parallax, Navigation, Autoplay, EffectFade]} // EffectFade modülünü ekledik
      className="main-slider h-[50dvh] mobile:h-[60dvh] text-white"
    >
      {slidelist?.map((slide, index) => (
        <SwiperSlide key={index} className="">
          <img
            width={500}
            height={300}
            src={slide.url}
            alt={slide.title}
            className={
              "w-full h-full object-cover absolute top-0 left-0" +
              " " +
              itemClass
            }
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-primary-dark to-primary-light opacity-30 mobile:flex items-center "></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-primary-dark to-[#00000000] mobil:flex items-center"></div>
          <div className="div mx-auto container laptop:px-[60px] mobile:px-2 h-full flex flex-col items-center justify-center">
            <div
              className="text-secondary  font-bold text-shadow-lg mb-3 text-center laptop:text-4xl mobile:text-2xl"
              data-swiper-parallax="-200"
            >
              {slide.title}
            </div>
            <div
              className="md:max-w-xl mx-auto text-center text-lg mobile:text-sm text-white "
              data-swiper-parallax="200"
            >
              {slide.description}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
