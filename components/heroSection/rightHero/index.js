import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import styles from "./styles.module.scss";

export default function RightHero() {
  return (
    <div className={styles.right}>
      <p>Dealing in -</p>
      <div className={styles.right_details}>
        <div>
          <img src="/sliderImages/7.jpg" alt="" />
          <button>
            Nailart <MdOutlineArrowOutward />
          </button>
        </div>
        <div>
          <img src="/sliderImages/6.jpg" alt="" />
          <button>
            Tools <MdOutlineArrowOutward />
          </button>
        </div>
      </div>
    </div>
  );
}
