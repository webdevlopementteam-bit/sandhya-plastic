"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { ArrowLeft, ArrowRight } from "./Arrows";
import { useMounted } from "./useMounted";

const slides = [
  { src: "/sale-on-sale-scaled.png", alt: "Home" },
  { src: "/Premium-Pots-2-scaled.png", alt: "Home" },
];

function Slide({ slide, priority }) {
  return (
    <div className="hero-slide">
      <Image src={slide.src} alt={slide.alt} fill priority={priority} sizes="100vw" />
    </div>
  );
}

export default function HeroSlider() {
  const swiperRef = useRef(null);
  const mounted = useMounted();

  return (
    <div className="hero-slider">
      {mounted ? (
        <Swiper
          modules={[Autoplay]}
          loop
          speed={700}
          autoplay={{ delay: 7000, disableOnInteraction: false, pauseOnMouseEnter: false }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={slide.src}>
              <Slide slide={slide} priority={i === 0} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Slide slide={slides[0]} priority />
      )}

      <div className="hero-arrows">
        <button
          type="button"
          className="slidenav hero-prev"
          aria-label="Previous slide"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ArrowLeft />
        </button>
        <button
          type="button"
          className="slidenav hero-next"
          aria-label="Next slide"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
