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

export default function StaticDiv2() {
  return (
    <div className={styles.allstaticdivs}>
        <div className="mb-2">
          <h1 className={styles.allsmallh1s}>MEET THE ENTREPRENUER LINEUP</h1>
          <span className={styles.allspans}>Business owner? Make it stronger on the go</span>
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
          <img src="/staticdiv2/2.jpg" alt="nailtools" />
          <div className="flex flex-col gap-[4px]">
          <h5 className={styles.allh5s}>Essential Nail Kit Storage Bag</h5>
          <Link href="" className="underline text-[10px]">6 colors</Link>
          <div className={styles.rating}><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
          <p className="text-[12px]">₦35000</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.mySwiper_slide}>
          <img src="/staticdiv2/1.webp" />
          <div className="flex flex-col gap-[4px]">
          <h5 className={styles.allh5s}>Professional Starter Set-up</h5>
          <Link href="" className="underline text-[10px]">3 colors</Link>
          <div className={styles.rating}><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
          <p className="text-[12px]">₦900000</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.mySwiper_slide}>
          <img src="/staticdiv2/3.webp" />
          <div className="flex flex-col gap-[4px]">
          <h5 className={styles.allh5s}>Professional Wooden Manicure Table</h5>
          <Link href="" className="underline text-[10px]">3 colors</Link>
          <div className={styles.rating}><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
          <p className="text-[12px]">₦400000</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.mySwiper_slide}>
          <img src="/staticdiv2/4.webp" />
          <div className="flex flex-col gap-[4px]">
          <h5 className={styles.allh5s}>Transparent Nail Polish Display Rack</h5>
          <Link href="" className="underline text-[10px]">3 colors</Link>
          <div className={styles.rating}><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
          <p className="text-[12px]">₦49000</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.mySwiper_slide}>
          <img src="/staticdiv2/5.webp" />
          <div className="flex flex-col gap-[4px]">
          <h5 className={styles.allh5s}>Hand Silicon Practice Mannequin</h5>
          <Link href="" className="underline text-[10px]">3 colors</Link>
          <div className={styles.rating}><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
          <p className="text-[12px]">₦53000</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.mySwiper_slide}>
          <img src="/staticdiv2/6.webp" />
          <div className="flex flex-col gap-[4px]">
          <h5 className={styles.allh5s}>Foot Silicon Practice Mannequin</h5>
          <Link href="" className="underline text-[10px]">3 colors</Link>
          <div className={styles.rating}><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
          <p className="text-[12px]">₦53000</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.mySwiper_slide}>
          <img src="/staticdiv2/7.webp" />
          <div className="flex flex-col gap-[4px]">
          <h5 className={styles.allh5s}>Foot Detox Machine & Massager</h5>
          <Link href="" className="underline text-[10px]">7 colors</Link>
          <div className={styles.rating}><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
          <p className="text-[12px]">₦33000</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.mySwiper_slide}>
          <img src="/staticdiv2/8.webp" />
          <div className="flex flex-col gap-[4px]">
          <h5 className={styles.allh5s}>Foot Rest Pedicure Table</h5>
          <Link href="" className="underline text-[10px]">3 colors</Link>
          <div className={styles.rating}><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
          <p className="text-[12px]">₦66200</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.mySwiper_slide}>
          <img src="/staticdiv2/9.webp" />
          <div className="flex flex-col gap-[4px]">
          <h5 className={styles.allh5s}>Tricolor U-shaped Desk Lamp</h5>
          <Link href="" className="underline text-[10px]">3 colors</Link>
          <div className={styles.rating}><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></div>
          <p className="text-[12px]">₦38000</p>
          </div>
        </SwiperSlide>
      </Swiper>
        </div>
        </div>
  )
}
