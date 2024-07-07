import styles from "./styles.module.scss";

export default function HompageHero() {
  return (
    <div className={styles.hero}>
          <div className={styles.hero_first}>
            <div>
              <span>NEW</span>
              <h3>SUPERCHARGD<br/>NAIL TOOLS<br/>IN YOUR CORNER</h3>
              <p>Design, boost nail glow, visibly shade and recreate stunning art + cover all unwanted shades in 10 neutral shades.</p>
              <button>SHOP NEUTRAL NAIL</button>
            </div>
          </div>
          <div className={styles.hero_second}>
            <img src="/heroSlider/1.jpg" alt="imagine" />
          </div>
        </div>
  );
}
