import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { ChangingText } from '@/data/waitImages';

const ChangingTexts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (ChangingText && ChangingText.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % ChangingText.length);
      }, 5000); // 300000 ms = 5 minutes

      // Cleanup interval on component unmount
      return () => clearInterval(interval);
    }
  }, [ChangingText]);

  if (!ChangingText || ChangingText.length === 0) {
    return null; // or you can render a fallback UI
  }

  const data = ChangingText[currentIndex];

  return (
    <>
    <div className={styles.container}>
        {/* <img src='/leaf.png' alt='leaf' /> */}
        <div className={styles.container_texts}>
      <div className={styles.container_texts_heading}>{data.heading}</div>
      <div className={styles.container_texts_subHeading}>{data.subHeading}</div>
      
      {/* <div className={styles.container_texts_list}>
        
        <ul>
            <li><div className={styles.container_texts_list_ruler}></div>ALWAYS-ON REPAIR</li>
            <li><div className={styles.container_texts_list_ruler}></div>CUTTING-EDGE DESIGNS</li>
            <li><div className={styles.container_texts_list_ruler}></div>POWERHOUSE PRODUCTS</li>
            <li><div className={styles.container_texts_list_ruler}></div>HEALTHY NAILS FOR ALL</li>
        </ul>
      </div> */}
      </div>
    </div>
  {/* <div className={styles.loader} /> */}
  
  </>
  );
};

export default ChangingTexts;
