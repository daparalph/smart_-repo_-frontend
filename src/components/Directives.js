import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './styles/directive.module.scss';
import Loading from './Loading';
import Top from './Top';

const Directives = () => {
  const [directiveHTML, setDirectiveHTML] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

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
    const fetchDirectives = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:3000/directives');
        setDirectiveHTML(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching directives:', error);
      }
    }
  fetchDirectives();
}, []);
return (
  <div>
    {loading ? (
      <Loading />
    ) : (
      <div className={`${styles.container}`} dangerouslySetInnerHTML={{ __html: directiveHTML }} data-aos="fade-up" style={{ overflow: 'hidden' }} />
    )}
    <footer>
      <small className={`${styles.footerTextB}`}>
        <NavLink to="/" className={`${styles.footerText}`}>
          Terms of Use
        </NavLink>
        <NavLink to="/" className={`${styles.footerText}`}>
          Privacy Policy
        </NavLink>
      </small>

      <small className={`${styles.footerTextC}`}>© 2023 SmartRepo</small>
    </footer>
    <Top />
  </div>
  );
}

export default Directives;