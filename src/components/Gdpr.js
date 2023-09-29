import React, { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading';
import styles from './styles/directive.module.scss';
import { baseUrl } from '../baseUrl';
import Top from './Top';

const Gdpr = () => {
  const [laws, setLaws] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  const scrollToSection = (sectionElement) => {
    const scrollOffset = sectionElement.offsetTop - 50;
    window.scrollTo({
      top: scrollOffset,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (location.state && location.state.scrollToSection) {
      const sectionId = location.state.scrollToSection;
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        scrollToSection(sectionElement);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.state]);

    useEffect(() => {
    const fetchRegulations = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${baseUrl}regulations`);
        setLaws(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching laws:', error);
      }
    }
  fetchRegulations();
}, []);
return (
  <div>
    {loading ? (
      <Loading />
    ) : (
      <div dangerouslySetInnerHTML={{ __html: laws }} className={`${styles.container}`} />
      
    )}
    <div className={`${styles.container}`}>
      <p className={`${styles.footerTextA}`}>
        Visit the source of this page at <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A02016R0679-20160504" className={`${styles.footerRef}`}>EUR-LEX</a>
      </p>
    </div>
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
    <Top />
  </div>
);
}

export default Gdpr;
