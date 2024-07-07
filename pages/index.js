import Header from "@/components/header";
import Countdown from "@/components/countdown";
import HompageHero from "@/components/hero/hompageHero";
import WaitImages, { ChangingText, NineGridImages } from "@/data/waitImages";
import styles from "../styles/hompage.module.scss";
import { useEffect, useState } from "react";
import NailartSwiper from "@/components/nailartSwiper";
import ChangingTexts from "@/components/changingText/ChangingTexts";
import Link from "next/link";
import { MdOutlineArrowRightAlt, MdOutlineArrowLeftAlt } from "react-icons/md";

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

export default function Home({ country }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
  };

  useEffect(() => {
    const removeSlickArrows = () => {
      const slickPrev = document.querySelector('.slick-prev');
      const slickNext = document.querySelector('.slick-next');
      if (slickPrev) slickPrev.style.display = 'none';
      if (slickNext) slickNext.style.display = 'none';
    };
    removeSlickArrows();
  }, []);

  return (
    <div>
      <Header country={country} />
      <main className="flex flex-col">
        <HompageHero />
        <Countdown />
        <NailartSwiper />
        <div>
          <div className={styles.hero}>
            <div className={styles.hero_first}>
              <div>
                <span>LIMITED TIME</span>
                <h3>FREE NAIL TRIMMER SET ON ₦28000+ ORDERS</h3>
                <p>Stay neat and refreshed with our sesh and trimming set pack</p>
                <button>GET TREAT</button>
                <p>
                  Exclusions apply, while supplies last. <br />
                  Add gifts to cart at checkout.
                </p>
              </div>
            </div>
            <div className={styles.hero_second}>
              <img src="/heroSlider/nail-gift.png" alt="imagine" />
            </div>
          </div>
        </div>
        <ChangingTexts />
        <div className={styles.video}>
        <div className={styles.video_second}>
  {/* <video controls autoPlay loop>
    <source src="/videos/vid1.mp4" type="video/mp4" />
  </video> */}
  <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
    <iframe 
      src="https://player.vimeo.com/video/980143724?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
      frameBorder="0" 
      allow="autoplay;" 
      style={{ position: 'absolute', top: '0', left: '0', bottom: '0', width: '100%', height: '100%', objectFit: 'cover' }} 
      title="Hero Slider">
    </iframe>
  </div>
  <script src="https://player.vimeo.com/api/player.js"></script>
</div>
          <div className={styles.video_first}>
            <div>
              <span>FANCY STYLES START HERE</span>
              <h1>BUNDLES MADE-FOR-YOU COMPLETE STARTER BUNDLES</h1>
              <img src="" alt="" />
              <p>Cleanse, prepare, design + protect</p>
              <h3>FREE NAIL TRIMMER SET ON ₦28000+ ORDERS</h3>
              <div className={styles.video_buttons}>
                <button>SHOP NAIL REPAIR</button>
                <button>SHOP STYLE DESIGNERS</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.gridText}>
          <h1>AWESOME DESIGNS BEGINS HERE</h1>
          <span>Create, Design, Treat + Protect.</span>
          <Link href="https://shop.nailsrepublik.com">SHOP THE LOOKS</Link>
        </div>
        <Slider {...settings}  className={styles.sliderImageGrid}>
        {NineGridImages.map((item, i)=>(
          <div key={i}>
        <div className={styles.imageGrid}>
          <div className={styles.gridPart}>
            {item.images.slice(0, 4).map((img, index) => (
              <button key={index}>
                <img src={img} alt={`Image ${index + 1}`} />
              </button>
            ))}
          </div>
          <div className={styles.gridPart}>
            <button>
              <img src={item.images[4]} alt="Image 5" />
            </button>
          </div>
          <div className={styles.gridPart}>
            {item.images.slice(5, 9).map((img, index) => (
              <button key={index}>
                <img src={img} alt={`Image ${index + 6}`} />
              </button>
            ))}
          </div>
        </div>
        <h2 className={styles.itemName}>{item.name}</h2>
        </div>
        ))}
        </Slider>
      </main>
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
