import React from "react";
import styles from "./styles.module.scss";
import ReactCurvedText from "react-curved-text";
import Countdown from "react-countdown";
import { RiArrowRightUpLine } from "react-icons/ri";

export default function LeftHero() {
  return (
    <div className="">
      <div className={styles.heroContainer}>
        <div className={styles.heroContainer_text}>
          <div>
            <h1 className="">Unlock the Secrets to Radiant Nails</h1>
            <p>
              We Are Here to Provide the Best Nailcare and Nail Tool Products,
              Which Will Help You to be Clean and Bright{" "}
            </p>
          </div>
          <div className={styles.heroContainer_text__button}>
            <div className="flex items-center">
              <button>Shop Now</button>
              <RiArrowRightUpLine />
            </div>
          </div>
        </div>
        <div className={styles.heroContainer_countdown}></div>
      </div>
    </div>
  );
}
