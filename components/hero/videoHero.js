import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

export default function VideoHero() {
  return (
    <div className={styles.video}>
        <div className={styles.video_second}>
  <video autoPlay loop muted src="/videos/vid1.mp4"></video>
  {/* <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
    <iframe 
      src="https://player.vimeo.com/video/980143724?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
      frameBorder="0" 
      allow="autoplay;" 
      style={{ position: 'absolute', top: '0', left: '0', bottom: '0', width: '100%', height: '100%', objectFit: 'cover' }} 
      title="Hero Slider">
    </iframe>
  </div> */}
  {/* <script src="https://player.vimeo.com/api/player.js"></script> */}
</div>
          <div className={styles.video_first}>
            
          <span className="mb-2">MANICURE HYGEINE AND PODIATRY START HERE</span>
            <div>
              <h1 className='mb-4'>If you work with your hands, then you must take great care of them. At Nails Republik, we specialize in creating fancy styles that start with you. Explore our curated selection of Complete Starter Bundles, thoughtfully crafted to cleanse, prepare, design, and protect your nails with ease. Whether you're a nail art enthusiast or seeking professional-grade products, our products are made-for-you to elevate your nail care routine to new heights. Discover the perfect combination of quality and creativity at Nails Republic. Your journey to bold nails begins here.</h1>
              {/* <img src="" alt="" /> */}
              {/* <span className="mb-10 mt-10">Cleanse, prepare, design + protect</span> */}
              {/* <h3>FREE NAIL TRIMMER SET ON ₦28000+ ORDERS</h3> */}
              
            </div>
            <div className={styles.video_first__buttons}>
                <button><Link href="" legacyBehavior><a href='https://shop.nailsrepublik.com' target='_blank'>VISIT OUR STORE</a></Link></button>
                <button><Link href="" legacyBehavior><a href='https://blog.nailsrepublik.com' target='_blank'>VISIT OUR BLOG</a></Link></button>
              </div>
          </div>
        </div>
  )
}
