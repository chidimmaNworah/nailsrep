import React from "react";
import styles from "./styles.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NineGridImages } from "@/data/waitImages";

export default function GridHero() {
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
  return (
    <Slider {...settings} className={styles.sliderImageGrid}>
      {NineGridImages.map((item, i) => (
        <div key={i}>
          <div className={`${styles.imageGrid} relative`}>
            <div className={`${styles.gridPart} w-full h-full overflow-hidden`}>
              {item.images.slice(0, 4).map((img, index) => (
                <div
                  key={index}
                  className="relative w-full h-full overflow-hidden"
                >
                  <button className="relative w-full h-full transition-transform duration-500 transform hover:scale-105">
                    <img src={img} alt={`Image ${index + 1}`} />
                    <div class="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-500"></div>
                  </button>
                </div>
              ))}
            </div>
            <div className={`${styles.gridPart} w-full h-full overflow-hidden`}>
              <button className="relative w-full h-full transition-transform duration-500 transform hover:scale-105">
                <img src={item.images[4]} alt="Image 5" />
                <div class="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-500"></div>
              </button>
            </div>
            <div className={`${styles.gridPart} w-full h-full overflow-hidden`}>
              {item.images.slice(0, 4).map((img, index) => (
                <div
                  key={index}
                  className="relative w-full h-full overflow-hidden"
                >
                  <button
                    key={index}
                    className="relative w-full h-full transition-transform duration-500 transform hover:scale-105"
                  >
                    <img src={img} alt={`Image ${index + 6}`} />
                    <div class="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-500"></div>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <h2 className={styles.itemName}>{item.name}</h2>
        </div>
      ))}
    </Slider>
  );
}
