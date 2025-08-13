"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel() {
  const banners = ["/1.png", "/2.png", "/3.png", "./4.png", "./5.png", "./6.png"];

  return (
    <div className="max-w-6xl mx-auto mt-6 relative rounded-2xl">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        slidesPerView={1}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{
          clickable: true,
          bulletClass:
            "swiper-pagination-bullet bg-gray-300 opacity-70 w-3 h-3 rounded-full mx-1",
          bulletActiveClass: "bg-white opacity-100",
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        speed={600}
        className="rounded-lg overflow-hidden bg-black" 
      >
        {banners.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`Banner ${i + 1}`}
              className="w-full h-[350px] object-contain" 
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="custom-prev absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full z-10">
        ❮
      </button>
      <button className="custom-next absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full z-10">
        ❯
      </button>
    </div>
  );
}
