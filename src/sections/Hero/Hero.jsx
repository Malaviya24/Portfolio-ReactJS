import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import buyMeCoffeeLight from '../../assets/buy-me-coffee-light.svg';
import buyMeCoffeeDark from '../../assets/buy-me-coffee-dark.svg';
// CV.pdf is now in public folder
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const buyMeCoffeeIcon = theme === 'light' ? buyMeCoffeeLight : buyMeCoffeeDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Dhruv Malaviya"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
          onTouchEnd={(e) => {
            e.preventDefault();
            toggleTheme();
          }}
          style={{ pointerEvents: 'auto' }}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Dhruv
          <br />
          Malaviya
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://www.linkedin.com/in/dhruv-malaviya" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://github.com/Malaviya24" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://x.com/Malaviya_md" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a
            className={styles.coffeeLink}
            href="https://buymeacoffee.com/malaviya"
            target="_blank"
            aria-label="Buy me a coffee"
          >
            <img src={buyMeCoffeeIcon} alt="Buy Me a Coffee icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for building modern React web apps for businesses.
        </p>
        <a href="/Dhruv-CV.pdf" download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
