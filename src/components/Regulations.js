import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loading from './Loading';
import styles from './styles/directive.module.scss';
import { baseUrl } from '../baseUrl';

const Regulations = () => {
  const [regulations, setRegulations] = useState([]);
  const [memo, setMemo] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const sectionRef = useRef(null);


  useEffect(() => {
    AOS.init({
      duration: 500,
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
  const fetchRegulations = async () => {
    try {
      const response = await axios.get(`${baseUrl}statutory-instrument`);
      setRegulations(response.data);
    } catch (error) {
      console.error('Error fetching regulations:', error);
    }
  }
    fetchRegulations();
  }, []);

useEffect(() => {
  const fetchRegulations = async () => {
    try {
      const response = await axios.get(`${baseUrl}explanatory-memorandum`);
      setMemo(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching regulations:', error);
    }
  }
fetchRegulations();
}, []);

  return (
    <>
      {loading ? (
        <Loading />
        ) :(
      <>
      <div id="regulations" className={`${styles.container}`} style={{ overflow: 'hidden' }} ref={sectionRef}>
      <section className={`${styles.midContainer} ${styles.force}`} data-aos="fade-down">
        <h1 className={`${styles.titleOne}`}>The Intelligent Transport Systems (EU Exit) Regulations 2018</h1>
        <p className={`${styles.para}`}>This SI will revoke a number of pieces of EU legislation relating
          to intelligent transport systems. The legislation that will be revoked is not needed after EU
          exit as the intelligent transport system’s policy is implemented in the UK by administrative means.
        </p>
      </section>
      <section className={`${styles.midContainer}`} data-aos="fade-up">
        <h4 className={`${styles.titleFive}`}>Contents</h4>
        <ul className={`${styles.divider}`}>
          <li className={`${styles.list}`}>
            <a href="#instrument" className={`${styles.int}`}>Statutory Instrument</a>
          </li>
          <li className={`${styles.list}`}>
            <a href="#memo" className={`${styles.int}`}>Explanatory Memorandum</a>
          </li>
        </ul>
      </section>
      <section className={`${styles.midContainer}`}>
        <article className={`${styles.article}`} data-aos="fade-up">
          <h2 id="instrument" className={`${styles.titleThree}`}>Statutory Instrument</h2>
          <p className={`${styles.para}`}>The Statutory Instrument for Intelligent Transport System (EU Exit)
            Regulations is the legal instrument or regulation issued by the United Kingdom (UK) government as
            a result of theUK's exit from the European Union (EU).The withdrawal of UK from the EU requires
            that the ministers adapt or replace EU regulations in the field of Intelligent Transport Systems
            (ITS) to align with the UK's post-Brexit legal framework.
          </p>
          <div title='Read more' dangerouslySetInnerHTML={{ __html: regulations }} />

        </article>
        <article className={`${styles.article}`} data-aos="fade-up">
          <h2 id="memo" className={`${styles.titleThree}`}>Explanatory Memorandum</h2>
          <p className={`${styles.para}`}>The Explanatory Memorandum provides insights into the implications
            and objectives of the Intelligent Transport System (EU Exit) Regulations. It outlines the changes
            in the regulatory framework following the UK's exit from the EU, emphasizing the need for a
            seamless transition in intelligent transport systems. The memorandum clarifies the legal and
            practical adjustments required to maintain effective transportation technology within the UK,
            ensuring safety, efficiency, and compliance with national standards.
          </p>
          <div title='Read more' dangerouslySetInnerHTML={{ __html: memo }} />
        </article>
      </section>
      </div>
      <div className={`${styles.container}`}>
        <p className={`${styles.footerTextA}`}>
          Visit the source of this page at <a href="https://www.gov.uk/eu-withdrawal-act-2018-statutory-instruments/the-intelligent-transport-systems-eu-exit-regulations-2018" className={`${styles.footerRef}`}>EUR-LEX</a>
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
    </>
    )}
    </>
  );
}

export default Regulations;