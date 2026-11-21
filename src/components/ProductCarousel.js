"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { ArrowLeft, ArrowRight } from "./Arrows";
import { useMounted } from "./useMounted";

function ProductCard({ item }) {
  return (
    <div className="product-card">
      <div className="product-card-image">
        <Image
          src={item.image}
          alt={item.title}
          width={1024}
          height={1024}
          sizes="(min-width: 999px) 33vw, (min-width: 689px) 50vw, 100vw"
        />
      </div>
      <div className="product-card-content">
        <div className="product-card-title-wrap">
          <h3 className="product-card-title">{item.title}</h3>
        </div>
        <div className="product-card-text">
          <p>{item.text}</p>
        </div>
      </div>
    </div>
  );
}

export default function ProductCarousel({ items, delay, variant = "default" }) {
  const swiperRef = useRef(null);
  const mounted = useMounted();

  return (
    <div className={`product-carousel product-carousel-${variant}`}>
      {mounted ? (
        <Swiper
          modules={[Autoplay]}
          loop
          speed={500}
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay, disableOnInteraction: false }}
          breakpoints={{
            689: { slidesPerView: 2, spaceBetween: 20 },
            999: { slidesPerView: 3, spaceBetween: 20 },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.title + item.image}>
              <ProductCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="carousel-fallback">
          {items.slice(0, 3).map((item) => (
            <div className="carousel-fallback-slide" key={item.title + item.image}>
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      )}

      <button
        type="button"
        className="slidenav carousel-prev"
        aria-label="Previous slide"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <ArrowLeft />
      </button>
      <button
        type="button"
        className="slidenav carousel-next"
        aria-label="Next slide"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <ArrowRight />
      </button>
    </div>
  );
}
