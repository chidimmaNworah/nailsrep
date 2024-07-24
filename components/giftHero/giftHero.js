import React from 'react'
import styles from './styles.module.scss'
import { motion } from 'framer-motion';

export default function GiftHero() {
  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible
  };
  return (
    <div>
          <div className={styles.hero}>
            <div className={styles.hero_first}>
            <motion.div
      initial="hidden"
      whileInView="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
                <span>LIMITED TIME</span>
                <motion.h3
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible
        }}>FREE NAIL TRIMMER SET ON ₦28000+ ORDERS</motion.h3>
                <motion.p variants={itemVariants}>Stay neat and refreshed with our sesh and trimming set pack</motion.p>
                <motion.button variants={itemVariants}>GET TREAT</motion.button>
                <motion.p variants={itemVariants}>
                  Exclusions apply, while supplies last. <br />
                  Add gifts to cart at checkout.
                </motion.p>
              </motion.div>
            </div>
            <div className={styles.hero_second}>
              <img src="/heroSlider/nail-gift.png" alt="imagine" />
            </div>
          </div>
        </div>
  )
}
