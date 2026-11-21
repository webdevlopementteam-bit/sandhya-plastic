"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useMounted } from "./useMounted";

function ReviewCard({ item }) {
  return (
    <div className="review-card">
      <h3 className="review-name">{item.name}</h3>
      <div className="review-text">
        <p>{item.text}</p>
      </div>
    </div>
  );
}

export default function ReviewCarousel({ items }) {
  const [swiper, setSwiper] = useState(null);
  const [active, setActive] = useState(0);
  const mounted = useMounted();

  return (
    <div className="review-carousel">
      {mounted ? (
        <Swiper
          modules={[Autoplay]}
          loop
          speed={500}
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            689: { slidesPerView: 2, spaceBetween: 20 },
            999: { slidesPerView: 1, spaceBetween: 20 },
          }}
          onSwiper={setSwiper}
          onSlideChange={(s) => setActive(s.realIndex)}
        >
          {items.map((item) => (
            <SwiperSlide key={item.name}>
              <ReviewCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="carousel-fallback review-fallback">
          {items.slice(0, 2).map((item) => (
            <div className="carousel-fallback-slide" key={item.name}>
              <ReviewCard item={item} />
            </div>
          ))}
        </div>
      )}

      <div className="review-dots">
        {items.map((item, i) => (
          <button
            type="button"
            key={item.name}
            className={`review-dot${i === active ? " active" : ""}`}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => swiper?.slideToLoop(i)}
          />
        ))}
      </div>
    </div>
  );
}
