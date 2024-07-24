import React from 'react'
import styles from './styles.module.scss'
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaLongArrowAltLeft, FaLongArrowAltRight, FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function StaticDiv3() {
  return (
    <div className={styles.allstaticdivs}>
        <div className="mb-2">
          <h1 className={styles.allsmallh1s}>TOOLS AND TREATS IN HERE</h1>
          <span className={styles.allspans}>Nailcare and nourishment lives here!</span>
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
        className={`${styles.mySwiper} mb-10`}
      >
        <SwiperSlide className={styles.mySwiper_slide}>
          <img src="/staticdiv3/1.webp" alt="nailtools" />
          <div className="flex flex-col gap-[4px]">
          <h5 className={styles.allh5s}>UV Lamp Sunscreen Protector</h5>
          <Link href="" className="underline text-[10px]">1 colors + 6 designs</Link>
          <div className={styles.rating}><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
          <p className="text-[12px]">₦2200</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.mySwiper_slide}>
          <img src="/staticdiv3/2.webp" />
          <div className="flex flex-col gap-[4px]">
          <h5 className={styles.allh5s}>Cuticle Softening Oil Pen</h5>
          <Link href="" className="underline text-[10px]">1 colors</Link>
          <div className={styles.rating}><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
          <p className="text-[12px]">₦1300</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.mySwiper_slide}>
          <img src="/staticdiv3/3.webp" />
          <div className="flex flex-col gap-[4px]">
          <h5 className={styles.allh5s}>Nail Fungus Treatment</h5>
          <Link href="" className="underline text-[10px]">1 color</Link>
          <div className={styles.rating}><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
          <p className="text-[12px]">₦1550</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.mySwiper_slide}>
          <img src="/staticdiv3/4.webp" />
          <div className="flex flex-col gap-[4px]">
          <h5 className={styles.allh5s}>Nail Nourishing Organic Oil</h5>
          <Link href="" className="underline text-[10px]">13 colors</Link>
          <div className={styles.rating}><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
          <p className="text-[12px]">₦4500</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.mySwiper_slide}>
          <img src="/staticdiv3/5.webp" />
          <div className="flex flex-col gap-[4px]">
          <h5 className={styles.allh5s}>Dust Powder Cleaning Brush</h5>
          <Link href="" className="underline text-[10px]">3 colors + 3 designs</Link>
          <div className={styles.rating}><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
          <p className="text-[12px]">₦800</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.mySwiper_slide}>
          <img src="/staticdiv3/6.webp" />
          <div className="flex flex-col gap-[4px]">
          <h5 className={styles.allh5s}>Pedicure Sandpaper Grinder Machine</h5>
          <Link href="" className="underline text-[10px]">3 colors</Link>
          <div className={styles.rating}><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
          <p className="text-[12px]">22000</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.mySwiper_slide}>
          <img src="/staticdiv3/7.webp" />
          <div className="flex flex-col gap-[4px]">
          <h5 className={styles.allh5s}>Double Ended Ingrown Hook</h5>
          <Link href="" className="underline text-[10px]">1 color + 3 designs</Link>
          <div className={styles.rating}><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
          <p className="text-[12px]">₦900</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.mySwiper_slide}>
          <img src="/staticdiv3/8.webp" />
          <div className="flex flex-col gap-[4px]">
          <h5 className={styles.allh5s}>Pedicure Foot Skin Shaver</h5>
          <Link href="" className="underline text-[10px]">1 color</Link>
          <div className={styles.rating}><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
          <p className="text-[12px]">₦1080</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.mySwiper_slide}>
          <img src="/staticdiv3/9.webp" />
          <div className="flex flex-col gap-[4px]">
          <h5 className={styles.allh5s}>Orthotics Feet Adjuster</h5>
          <Link href="" className="underline text-[10px]">3 colors</Link>
          <div className={styles.rating}><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
          <p className="text-[12px]">₦2370</p>
          </div>
        </SwiperSlide>
      </Swiper>
        </div>
        </div>
  )
}
