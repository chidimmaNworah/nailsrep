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

export default function StaticDiv1() {
  return (
    <div className={styles.allstaticdivs}>
      <div className="mb-2">
        <h1 className={styles.allsmallh1s}>FOREVER NAIL GANG FAVES</h1>
        <span className={styles.allspans}>Discover need-it-now obsessions</span>
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
              slidesPerView: 6,
              slidesPerGroup: 6,
            },
            1024: {
              slidesPerView: 5,
              slidesPerGroup: 5,
            },
            769: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
          }}
          scrollbar={true}
          modules={[Keyboard, Scrollbar]}
          className={styles.mySwiper}
        >
          <SwiperSlide className={styles.mySwiper_slide}>
            <img src="nailtools.webp" alt="nailtools" />
            <div className="flex flex-col gap-[4px]">
              <h5 className={styles.allh5s}>Mini Bomb UV Lamp</h5>
              <Link href="" className="underline text-[10px]">
                3 colors + 3 designs
              </Link>
              <div className={styles.rating}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <p className="text-[12px]">₦6110</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.mySwiper_slide}>
            <img src="doublesidedglue.webp" />
            <div className="flex flex-col gap-[4px]">
              <h5 className={styles.allh5s}>Temporary Sticky Nail glue</h5>
              <Link href="" className="underline text-[10px]">
                1 colors + 3 designs
              </Link>
              <div className={styles.rating}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <p className="text-[12px]">₦1020</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.mySwiper_slide}>
            <img src="singlefingeruvlamp.webp" />
            <div className="flex flex-col gap-[4px]">
              <h5 className={styles.allh5s}>Extra Mini UV Lamp</h5>
              <Link href="" className="underline text-[10px]">
                3 colors + 2 designs
              </Link>
              <div className={styles.rating}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <p className="text-[12px]">₦3000</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.mySwiper_slide}>
            <img src="nailrings.webp" />
            <div className="flex flex-col gap-[4px]">
              <h5 className={styles.allh5s}>Nailart Ring Nail Installer</h5>
              <Link href="" className="underline text-[10px]">
                2 colors
              </Link>
              <div className={styles.rating}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <p className="text-[12px]">₦1910</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.mySwiper_slide}>
            <img src="adhesivenailglue.webp" />
            <div className="flex flex-col gap-[4px]">
              <h5 className={styles.allh5s}>Small Adhesive Liquid Nail Glue</h5>
              <Link href="" className="underline text-[10px]">
                1 colors + 4 designs
              </Link>
              <div className={styles.rating}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <p className="text-[12px]">₦120</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.mySwiper_slide}>
            <img src="nailfoil.webp" />
            <div className="flex flex-col gap-[4px]">
              <h5 className={styles.allh5s}>Acrylic + Gel Dissolving Foil</h5>
              <Link href="" className="underline text-[10px]">
                1 color
              </Link>
              <div className={styles.rating}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <p className="text-[12px]">₦900</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.mySwiper_slide}>
            <img src="handmassager.webp" />
            <div className="flex flex-col gap-[4px]">
              <h5 className={styles.allh5s}>
                One Hand Steam + Massage Machine
              </h5>
              <Link href="" className="underline text-[10px]">
                2 colors
              </Link>
              <div className={styles.rating}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <p className="text-[12px]">₦7700</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.mySwiper_slide}>
            <img src="gelremovernewage.webp" />
            <div className="flex flex-col gap-[4px]">
              <h5 className={styles.allh5s}>Newage Nail Dissolving Machine</h5>
              <Link href="" className="underline text-[10px]">
                2 colors
              </Link>
              <div className={styles.rating}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <p className="text-[12px]">₦13000</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.mySwiper_slide}>
            <img src="acrylicpot.webp" />
            <div className="flex flex-col gap-[4px]">
              <h5 className={styles.allh5s}>Acrylic Mixing Pot</h5>
              <Link href="" className="underline text-[10px]">
                6 colors + 6 designs
              </Link>
              <div className={styles.rating}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <p className="text-[12px]">₦3000</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
