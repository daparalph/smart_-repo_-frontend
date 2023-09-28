import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import styles from './styles/nav.module.scss';

const Top = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`${styles.scrollTop} ${isVisible ? 'visible' : 'hidden'}`}
      onClick={scrollToTop}
    >
      <IoIosArrowUp />
    </div>
  );
};

export default Top;
