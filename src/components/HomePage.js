import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';
import styles from './styles/homepage.module.scss';
import frameHero from '../assets/frameHero.webp';
import Top from './Top';
import { BsSearch } from 'react-icons/bs';
import { baseUrl } from '../baseUrl';

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  // const [showNoResults, setShowNoResults] = useState(false);
  // const [isSearchEmpty, setIsSearchEmpty] = useState(true);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query === '') {
      console.log('Empty')
    } else {
      try {
        const response = await axios.post(`${baseUrl}search`, { query });
        setResults(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const [showEU, setShowEU] = useState(true);
  const [showUK, setShowUK] = useState(false);
  const [showGDPR, setShowGDPR] = useState(false);

  const handleEU = () => {
    setShowEU(!showEU);
    setShowUK(false);
    setShowGDPR(false);
  }

  const handleUK = () => {
    setShowUK(!showUK);
    setShowEU(false);
    setShowGDPR(false);
  }

  const handleGDPR = () => {
    setShowGDPR(!showGDPR);
    setShowEU(false);
    setShowUK(false);
  }

  const checkStatus = () => {
    if (!showEU && !showUK && !showGDPR) {
      setShowEU(true);
    }
  }

  return (
    <section className={`${styles.container}`} style={{ overflow: 'hidden' }}>
      <div className={`${styles.heroCard} ${styles.special}`}>
        <h1 className={`${styles.h1}`}>Explore laws and privacy regulations</h1>
        <form className={`${styles.queryDiv}`}>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search EU regulations, directives..."
            className={`${styles.search}`}
          />
          <button onClick={handleSearch}><BsSearch /></button>
        </form>
        <ul className={`${styles.result}`}>
          {results.map((result, index) => (
            <li key={index} className={`${styles.tList}`} dangerouslySetInnerHTML={{ __html: result.content }} />
          ))}
        </ul>
      </div>
      <section className={`${styles.midContainerB} ${styles.midCenter}`}>
        <img src={frameHero} className={`${styles.round}`} alt="hero" />
        <div className={`${styles.midText}`} data-aos="fade-down">
          <h2 className={`${styles.h2}`}>Get Information</h2>
          <p>Stay informed and updated on laws and privacy regulations within the domain of intelligent transport systems.</p>
        </div>
      </section>

      <section className={`${styles.subNavigation}`} data-aos="zoom-in">
        <ul className={`${styles.flex}`}>
          <li className={`${styles.list}`} onClick={() => handleEU()}>EU Directives</li>
          <li className={`${styles.list}`} onClick={() => handleUK()}>UK Regulations</li>
          <li className={`${styles.list}`} onClick={() => handleGDPR()}>GDPR Laws</li>
        </ul>
      </section>

      <section className={`${styles.content}`}>
          <section className={`${styles.midContainer}`} data-aos="fade-left">
          {(showEU || checkStatus()) && (
            <div className={`${styles.heroCard}`}>
              <h2 className={`${styles.h2}`} data-aos="fade-right">EU Directives</h2>
              <div className={`${styles.flex}`}>
                <NavLink to="/directives" className={`${styles.link}`}>DIRECTIVE 2010/40/EU</NavLink>
                <p>Explore the European Union Directive governing the operations of smart transportation in Europe.</p>
              </div>
            </div>
          )}
        </section>
  

      <section className={`${styles.midContainer}`} data-aos="fade-left">
       {showUK && (
        <div className={`${styles.heroCard}`}>
        <h2 className={`${styles.h2}`} data-aos="fade-right">UK Regulations</h2> 
        <div className={`${styles.flex}`}>
          <NavLink to="/regulations" className={`${styles.link}`}>The Intelligent Transport Systems (EU Exit) Regulations 2018</NavLink>
          <p>SmartRepo updates you with the Post-Brexit UK Regulations relating to smart transportation.</p>
        </div>
      </div>)}
      </section>

      <section className={`${styles.midContainer}`} data-aos="fade-left">
        {showGDPR && (
          <div className={`${styles.heroCard}`}>
          <h2 className={`${styles.h2}`} data-aos="fade-right">GDPR Laws</h2>
          <div className={`${styles.flex}`}>
            <NavLink to="/gdpr" className={`${styles.link}`}>Regulation (EU) 2016/679 General Data Protection Regulation</NavLink>
            <p>Keep up to date with the GDPR Regulation as relevant information are neatly arranged readability.</p>
          </div>
        </div>)}
      </section>
    </section>

    <footer>
      <small className={`${styles.footerTextB}`}>
        <NavLink to="/terms-of-use" className={`${styles.footerText}`}>
          Terms of Use
        </NavLink>
        <NavLink to="/privacy" className={`${styles.footerText}`}>
          Privacy Policy
        </NavLink>
        <small className={`${styles.footerTextC}`}>© 2023 SmartRepo <span>|</span> All Rights Reserved</small>
      </small>
    </footer>
    <Top />
    </section>
  )
}

export default HomePage;