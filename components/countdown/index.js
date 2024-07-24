import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";
import React, { useState, useEffect, useRef } from "react";
import { FaLongArrowAltRight, FaPlus, FaMinus } from "react-icons/fa";
import { motion } from "framer-motion";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const countDownDate = new Date("Oct 8, 2024 00:00:00").getTime();

    const updateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    const interval = setInterval(updateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className={styles.offer}>
          <motion.div
            whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 1 }}
            >
            <h2>DON'T MISS THIS MAJOR OFFER</h2>
            <p className={styles.offer__desc}>Get early access to Nail Art Bootcamp, coming exclusively here on 8/10.</p>
            <div className={styles.offer__time}>
              <div><p>{timeLeft.days}</p> <span>Days</span></div>
              <div><p>{timeLeft.hours}</p> <span>Hours</span></div>
              <div><p>{timeLeft.minutes}</p> <span>Minutes</span></div>
              <div><p>{timeLeft.seconds}</p> <span>Seconds</span></div>
            </div>
            <div className={styles.offer__horizontal}>
            <div />
            <p onClick={() => setVisible(!visible)}><span>Leave your email</span><span>{visible ? <motion.button whileTap={{rotate: 360}}><FaMinus /></motion.button> : <motion.button whileTap={{rotate: 360}}><FaPlus /></motion.button>}</span></p>
            <div/>
            </div>
            {
              visible && (<motion.div initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }} className={styles.offer__subscribe}>
                <div>
                  <input type="tel" placeholder="Phone" name="phone" />
                  <button><FaLongArrowAltRight /></button>
                </div>
                <div>
                  <input type="email" placeholder="Email" name="email" />
                  <button><FaLongArrowAltRight /></button>
                </div>
                <p>By subscribing to Nails Republik, you are consenting to receive a varying number of marketing messages via email and SMS. Consent is not a condition of any purchase. Message and data rates may apply. Reply HELP for help or STOP to opt-out.View Terms of Use and Privacy Policy.</p>
              </motion.div>)
            }
            
          </motion.div>
        </div>
  );
}
