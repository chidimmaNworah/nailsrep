import React, {useState} from 'react'
import {WaitImages} from '@/data/waitImages'
import styles from './styles.module.scss'

export default function NailartSwiper() {
    // Create a state to keep track of the currently hovered image index
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className={styles.artwork}>
          <p className={styles.artwork_heading}>
            Meet the nails republik artwork
          </p>
          <span className={styles.artwork_subheading}>
            Your nails on the Republik? It can only get better
          </span>
          <div className={styles.artwork_container}>
            {WaitImages.map((item, index) => (
              <div className={styles.artwork_product} key={index}>
                <div
                  className={styles.imageContainer}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img
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
