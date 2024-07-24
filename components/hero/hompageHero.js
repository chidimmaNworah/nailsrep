import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./styles.module.scss";

export default function HompageHero() {
  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible
};

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
    <div className={styles.hero}>
          <div className={styles.hero_first}>
            <div>
              <span>NEW</span>
              <motion.h3
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible
        }}
        
      >
              SUPERCHARGD<br/>NAIL TOOLS<br/>IN YOUR CORNER</motion.h3>
              <motion.p variants={itemVariants}>
              Design, boost nail glow, visibly shade and recreate stunning art + cover all unwanted shades in 10 neutral shades.</motion.p>
              <motion.a variants={itemVariants} href="https://shop.nailsrepublik.com">
              <button>SHOP NEUTRAL NAIL</button>
              </motion.a>
            </div>
          </div>
          <div className={styles.hero_second}>
            <img src="/heroSlider/1.jpg" alt="imagine" />
          </div>
        </div>
    </motion.div>
  );
}
