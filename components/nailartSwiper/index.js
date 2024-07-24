import React, {useState} from 'react'
import {WaitImages} from '@/data/waitImages'
import styles from './styles.module.scss'
import { motion } from 'framer-motion';

export default function NailartSwiper() {
    // Create a state to keep track of the currently hovered image index
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className={styles.artwork}>
          <motion.p initial={{opacity: 0, y: 0}} whileInView={{opacity: 1, y: 0, transition: {duration: 1}}} exit={{ opacity: 0, y: 0}} className={styles.artwork_heading}>
            Meet the nails republik artwork
          </motion.p>
          <motion.span initial={{opacity: 0, y: 0}} whileInView={{opacity: 1, y: 0, transition: {duration: 1}}} exit={{ opacity: 0, y: 0}} className={styles.artwork_subheading}>
            Your nails on the Republik? It can only get better
          </motion.span>
          <div className={styles.artwork_container}>
            {WaitImages.map((item, index) => (
              <div className={styles.artwork_product} key={index}>
                <div
                  className={styles.imageContainer}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <motion.img whileHover={{ scale: 1.03 }}
           onHoverStart={e =>{}}
           onHoverEnd={e=>{}}
                    src={hoveredIndex === index && item.images[1] ? item.images[1] : item.images[0]}
                    alt={item.name}
                    className="first-image"
                  />
                  {hoveredIndex === index && item.images[1] ?                 <span className={styles.imageContainer_category}>NEW</span>
: ""}
                {hoveredIndex === index && item.images[1] ? <button>{item.buttonText}</button> : ""}    
                </div>
                
                <p className={styles.artwork_name}>{item.name}</p>
                <p className={styles.artwork_price}>
                  <span>₦{item.priceBefore}</span>
                  <span>₦{item.price}</span>
                </p>            
              </div>
            ))}
          </div>
        </div>
  )
}
