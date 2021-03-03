import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Keyboard } from "swiper/core";
import "swiper/swiper-bundle.css";

export default function Gallery() {
  SwiperCore.use([Pagination, Keyboard]);

  const photosId = [1026, 1029, 1036, 1048, 1015, 1016, 1044, 1018];
  const photoList = photosId.map((id, index) => {
    return (
      <SwiperSlide key={index}>
        <img src={`https://picsum.photos/id/${id}/300/200`} alt="landscape" />
      </SwiperSlide>
    );
  });

  return (
    <section className="main__gallery">
      <Swiper
        pagination
        keyboard
        spaceBetween={15}
        breakpoints={{
          1500: { slidesPerView: 4 },
          1000: { slidesPerView: 3 },
          380: { slidesPerView: 2 },
          320: { slidesPerView: 1 },
        }}>
        {photoList}
      </Swiper>
    </section>
  );
}
