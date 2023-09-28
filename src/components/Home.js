import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroBg from '../assets/heroImage.webp';
import frameHero from '../assets/touch_mob.webp';
import smartLock from '../assets/smart-lock.webp';
import styles from './styles/home.module.scss';
import { NavLink } from 'react-router-dom';

const Home = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section className={`${styles.container}`} data-aos="fade-up" style={{ overflow: 'hidden' }}>
      <section className={`${styles.heroImage}`}>
        <img src={heroBg} className={`${styles.jombotron}`} alt="hero" />
        <div className={`${styles.heroCard}`}>
          <h2 className={`${styles.h2}`}>Access legal information in the field of smart transportation</h2>
          <NavLink to="/signup" className={`${styles.button}`}>
            Register
          </NavLink>
        </div>
      </section>
      <section className={`${styles.midContainer} ${styles.midCenter}`}>
        <img src={frameHero} className={`${styles.round}`} alt="hero" data-aos="fade-right" />
        <div className={`${styles.midText}`} data-aos="zoom-in">
          <h2 className={`${styles.h2}`}>Stay updated</h2>
          <p>Stay informed and updated on laws and privacy regulations within the domain of intelligent transport systems.</p>
        </div>
      </section>
      <section className={`${styles.midContainer}`}>
        <img src={smartLock} alt="hero" className={`${styles.smartLock}`} data-aos="zoom-in" />
        <div className={`${styles.heroCard}`}>
          <h2 className={`${styles.h2}`}>Know your rights</h2>
          <p>Get to know existing data policies and your rights as a user of smart transportation.</p>
        </div>
      </section>

      <section className={`${styles.midContainer} ${styles.force}`}>
        <div className={`${styles.heroCard}`} data-aos="zoom-out">
          <h3 className={`${styles.h2}`}>Get informed, be compliant and stay secured</h3>
          <NavLink to="/signup" className={`${styles.button}`}>
            Register
          </NavLink>
        </div>
      </section>

      <footer>
        <small className={`${styles.footerTextB}`}>
          <NavLink to="/terms-of-use" className={`${styles.footerText}`}>
            Terms of Use
          </NavLink>
          <NavLink to="/privacy" className={`${styles.footerText}`}>
            Privacy Policy
          </NavLink>
        </small>

        <small className={`${styles.footerTextC}`}>© 2023 SmartRepo</small>
      </footer>
    </section>
  );
};

export default Home;
