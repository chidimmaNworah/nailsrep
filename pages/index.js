import Header from "@/components/header";
import Countdown from "@/components/countdown";
import HompageHero from "@/components/hero/hompageHero";
import WaitImages, { ChangingText } from "@/data/waitImages";
import styles from "../styles/hompage.module.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NailartSwiper from "@/components/nailartSwiper";
import ChangingTexts from "@/components/changingText/ChangingTexts";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { MdOutlineArrowRightAlt, MdOutlineArrowLeftAlt } from "react-icons/md";
import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import GiftHero from "@/components/giftHero/giftHero";
import VideoHero from "@/components/hero/videoHero";
import GridHero from "@/components/hero/gridHero";
import StaticDiv1 from "@/components/staticDivs/staticDiv1";
import StaticDiv2 from "@/components/staticDivs/staticDiv2";
import StaticDiv3 from "@/components/staticDivs/staticDiv3";
import StaticDiv4 from "@/components/staticDivs/staticDiv4";
import Footer from "@/components/footer";

export default function Home({ country }) {
  useEffect(() => {
    const removeSlickArrows = () => {
      const slickPrev = document.querySelector(".slick-prev");
      const slickNext = document.querySelector(".slick-next");
      if (slickPrev) slickPrev.style.display = "none";
      if (slickNext) slickNext.style.display = "none";
    };
    removeSlickArrows();
  }, []);

  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible,
  };

  return (
    <div>
      <Header country={country} />
      <main className="flex flex-col my-0">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <HompageHero />
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <Countdown />
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <NailartSwiper />
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <GiftHero />
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <StaticDiv1 />
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <StaticDiv2 />
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <ChangingTexts />
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <StaticDiv3 />
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <VideoHero />
        </motion.div>

        {/* brands1 start */}
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          <div className={styles.brands1}>
            <div className="mb-8">
              <h1>NEED MORE INSPO? WE GOT YOU</h1>
              <span>Discover new designs, products, trends and more.</span>
            </div>
            <div className="flex flex-wrap justify-center items-stretch gap-1">
              <div className="flex flex-col items-start flex-1 gap-1">
                <div className="h-60 w-full overflow-hidden">
                  <img
                    src="/howto1.jpg"
                    alt="nailart"
                    className="h-full w-full object-cover object-top transition-transform ease-out duration-300 transform hover:scale-125"
                  />
                </div>
                <h5 className={styles.allh5s}>
                  <a
                    href="https://blog.nailsrepublik.com/nailcare/tips"
                    target="_blank"
                  >
                    NAIL REPUBLIK TIPS
                  </a>
                </h5>
                <span className={styles.allspans}>
                  Breaking down nail designs that everyone's talking about.
                </span>
              </div>
              <div className="flex flex-col items-start flex-1 gap-1">
                <div className="h-60 w-full overflow-hidden">
                  <img
                    src="/howto3.jpg"
                    alt="nailcare"
                    className="h-full w-full object-cover object-top transition-transform  ease-out duration-300 transform hover:scale-125"
                  />
                </div>
                <h5 className={styles.allh5s}>
                  <a
                    href="https://nailsrepublik.com/nailart/gallery"
                    target="_blank"
                  >
                    DIVA LOOKS
                  </a>
                </h5>
                <span className={styles.allspans}>
                  All the deep and complex styles you can recreate at home
                </span>
              </div>
              <div className="flex flex-col items-start flex-1 gap-1">
                <div className="h-60 w-full overflow-hidden">
                  <img
                    src="/howto2.jpg"
                    alt="nailequipments"
                    className="h-full w-full object-cover object-bottom ease-out transition-transform duration-300 transform hover:scale-125"
                  />
                </div>
                <h5 className={styles.allh5s}>
                  <a
                    href="https://www.youtube.com/@nailsrepublik"
                    target="_blank"
                  >
                    NAIL HOW-TOS
                  </a>
                </h5>
                <span className={styles.allspans}>
                  Endless inspo, exclusive styling tips + must-try techniques.
                </span>
              </div>
            </div>
          </div>
        </motion.div>
        {/* brands1 start */}

        {/* Grid text start */}
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.gridText}>
            <h1>AWESOME DESIGNS BEGINS HERE</h1>
            <span>Create, Design, Treat + Protect.</span>
            <Link href="https://shop.nailsrepublik.com">SHOP THE LOOKS</Link>
          </div>
        </motion.div>
        {/* Grid text end */}

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <GridHero />
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <StaticDiv4 />
        </motion.div>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          <div className={styles.brands}>
            <div className="mb-8">
              <h1>THE NAILS REPUBLIK BEAUTY BRANDS</h1>
              <span>
                Kimmoramicky's mission of Nail art, nail care, heavy equipments
                and tools for all.
              </span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <div>
                <img
                  src="/nailart.jpg"
                  alt="nailart"
                  width={200}
                  className="h-60 object-cover"
                />
                <p>Nail Art</p>
              </div>
              <div>
                <img
                  src="/nailcare.jpeg"
                  alt="nailcare"
                  width={200}
                  className="h-60 object-cover"
                />
                <p>Nail Care</p>
              </div>
              <div>
                <img
                  src="/nailequipments.jpg"
                  alt="nailequipments"
                  width={200}
                  className="h-60 object-cover"
                />
                <p>Nail Equipments</p>
              </div>
              <div>
                <img
                  src="/nailtools.webp"
                  alt="nailtools"
                  width={200}
                  className="h-60 object-cover"
                />
                <p>Nail Tools</p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

// const SampleNextArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//     className={`${className} ${styles.arrow} ${styles.nextArrow}`}
//     style={{ ...style, display: "block"}}
//       onClick={onClick}
//     ><FaLongArrowAltRight  />
// </div>
//   );
// };

// const SamplePrevArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//     className={`${className} ${styles.arrow} ${styles.prevArrow}`}
//     style={{ ...style, display: "block"}}
//       onClick={onClick}
//     ><FaLongArrowAltRight  />
// </div>
//   );
// };

export async function getServerSideProps() {
  return {
    props: {
      country: {
        name: "Nigeria",
        flag: "https://cdn.ipregistry.co/flags/emojitwo/ng.svg",
        code: "NG",
      },
    },
  };
}
