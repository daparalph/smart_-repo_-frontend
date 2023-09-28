import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading';
import styles from './styles/directive.module.scss';

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
        const response = await axios.get('http://localhost:3000/regulations');
        setLaws(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching laws:', error);
      }
    }
  fetchRegulations();
}, []);
return (
  <div className={`${styles.container}`}>
    {loading ? (
      <Loading />
    ) : (
      <div dangerouslySetInnerHTML={{ __html: laws }} />
    )}
  </div>
);
}

export default Gdpr;
