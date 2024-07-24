import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";

export default function StaticDiv4() {
  return (
    <div className={styles.allstaticdivs}>
      <div className="mb-2 mt-10">
        <h1 className={styles.allsmallh1s}>WE'VE GOT YOUR BACK</h1>
        <span className={styles.allspans}>
          Our exclusive services will answer all your needs
        </span>
      </div>
      <div>
        <Swiper
          slidesPerView={2}
          centeredSlides={false}
          slidesPerGroupSkip={2}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            1205: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            769: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
          scrollbar={true}
          modules={[Keyboard, Scrollbar]}
          className={`${styles.mySwiper}`}
        >
          <SwiperSlide className={styles.mySwiper_slide}>
            <div className={styles.mySwiper_slide__services}>
              <img src="/servicesImages/1.png" alt="FindYourSolution" />
            </div>
            <div className="flex flex-col items-center mt-4">
              <h5 className="font-bold">FIND YOUR SOLUTION</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.mySwiper_slide}>
            <div className={styles.mySwiper_slide__services}>
              <img src="/servicesImages/2.png" alt="FindYourSolution" />
            </div>
            <div className="flex flex-col items-center mt-4">
              <h5 className="font-bold">FIND YOUR SOLUTION</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.mySwiper_slide}>
            <div className={styles.mySwiper_slide__services}>
              <img src="/servicesImages/3.jpg" alt="FindYourSolution" />
            </div>
            <div className="flex flex-col items-center mt-4">
              <h5 className="font-bold">SUBSCRIBE TO SAVE</h5>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
