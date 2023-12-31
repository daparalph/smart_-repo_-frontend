import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import style from './styles/directive.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Privacy = () => {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease-in-out',
      once: true,
    });
  }
  , []);

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

  return (
    <div style={{ overflow: 'hidden' }}>
    <div className={`${style.container}`}>
      <div className={style.content} data-aos="fade-down">
        <p data-aos="fade-up">
          <b>Effective Date:</b>
          20th September, 2023
        </p>
        <h3 data-aos="fade-up">Introduction</h3>
        <p data-aos="fade-up">
          SmartRepo  (&#34;SmartRepo,&#34;
          &#34;we&#34;, &#34;us&#34;, or &#34;our&#34;) are committed to protecting the
          privacy and confidentiality of your personal information. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your personal information
          when you visit our website (&#34;Site&#34;) or use our services. By accessing
          the Site or using our services, you consent to the practices described in this
          Privacy Policy.
        </p>

        <h3 data-aos="fade-up">Information We Collect</h3>
        <p data-aos="fade-up">
          We may collect personal information that you voluntarily provide to us, such
          as your name, email address, contact details, and any other information you
          provide through forms or inquiries on the Site. Additionally, we may gather
          certain non-personal information automatically, including your IP address,
          browser type, internet service provider, referring/exit pages, and date/time
          stamps. This data is collected using cookies and other tracking technologies
          to enhance your browsing experience.
        </p>

        <h3 data-aos="fade-up">How We Use Your Information</h3>
        <p data-aos="fade-up">We use your personal information for the following purposes:</p>
        <ul className={style.disc}>
          <li data-aos="fade-up">
            To provide and maintain the Site and our services;
          </li>
          <li data-aos="fade-up">
            To respond to your inquiries and communicate with you;
          </li>
          <li data-aos="fade-up">
            To improve and personalize your experience on the Site;
          </li>
          <li data-aos="fade-up">
            To analyze and understand how users interact with the Site;
          </li>
          <li data-aos="fade-up">To comply with legal obligations;</li>
          <li data-aos="fade-up">
            To send promotional and marketing materials, subject to your consent where
            required by law.
          </li>
          <li data-aos="fade-up">
            Legal Basis for Processing
          </li>
        </ul>

        <p data-aos="fade-up">
          We process your personal information based on one or more of the following legal grounds:
        </p>
        <ul className={style.circle}>
          <li data-aos="fade-up">
            <b>Performance of a contract: </b>
            Processing is necessary to fulfill our
            contractual obligations with you.
          </li>
          <li data-aos="fade-up">
            <b>Consent: </b>
            You have given us your explicit consent to process your personal information
            for specific purposes.
          </li>
          <li data-aos="fade-up">
            <b>Legitimate interests: </b>
            Processing is necessary for our legitimate interests or the
            legitimate interests of third parties, provided that your fundamental rights and
            freedoms do not override those interests.
          </li>
          <li data-aos="fade-up">
            <b>Legal obligations: </b>
            Processing is necessary to comply with applicable
            laws and regulations.
          </li>
        </ul>

        <h3 data-aos="fade-up">Data Sharing and Disclosure</h3>
        <p data-aos="fade-up">
          We may share your personal information with third-party service providers to
          assist us in operating the Site or providing services to you. These providers
          have access to your personal information only to perform specific tasks on our
          behalf and are obligated not to disclose or use it for any other purpose. We
          may also disclose your personal information if required to do so by law or in
          response to valid requests by public authorities (e.g., law enforcement or
          government agencies).
        </p>

        <h3 data-aos="fade-up">Data Retention</h3>
        <p data-aos="fade-up">
          We will retain your personal information for as long as necessary to fulfill
          the purposes outlined in this Privacy Policy, unless a longer retention
          period is required or permitted by law.
        </p>

        <h3 data-aos="fade-up">Your Data Protection Rights</h3>
        <p data-aos="fade-up">
          If you are a resident of the European Economic Area (EEA), you have certain
          data protection rights, including:
        </p>
        <ul className={style.roman}>
          <li data-aos="fade-up">
            <b>Right of access: </b>
            You have the right to request a copy of the personal
            information we hold about you.
          </li>
          <li data-aos="fade-up">
            <b>Right of rectification: </b>
            You can request that we correct any inaccurate or
            incomplete personal information.
          </li>
          <li data-aos="fade-up">
            <b>Right to object: </b>
            You have the right to object to the processing of your
            personal information for certain purposes.
          </li>
          <li data-aos="fade-up">
            <b>Right of restriction: </b>
            You can request the restriction of processing under
            certain conditions.
          </li>
          <li data-aos="fade-up">
            <b>Right to data portability: </b>
            You can request a copy of your personal information
            in a structured, commonly used, and machine-readable format.
          </li>
          <li data-aos="fade-up">
            <b>Right to withdraw consent: </b>
            If we rely on your consent to process your personal
            information, you have the right to withdraw that consent at any time.
          </li>
        </ul>
        <p data-aos="fade-up">
          To exercise your data protection rights or request any other information,
          please contact us using the details provided at the end of this Privacy Policy.
        </p>

        <h3 data-aos="fade-up">Third-Party Links and Privacy Policies</h3>
        <p data-aos="fade-up">
          The Site may contain links to third-party websites or services that are not
          operated by SmartRepo. We have no control over the content and privacy practices
          of these third parties. We encourage you to review their privacy policies and
          practices before providing any personal information or using their services.
        </p>

        <h3 data-aos="fade-up">Children&apos;s Information</h3>
        <p data-aos="fade-up">
          The Site is not intended for children under the age of 13. We do not knowingly
          collect personal identifiable information from children. If you believe that
          your child has provided us with personal information, please contact us
          immediately, and we will make reasonable efforts to remove such information
          from our records.
        </p>

        <h3 data-aos="fade-up">Changes to the Privacy Policy</h3>
        <p data-aos="fade-up">
          We reserve the right to modify or update this Privacy Policy at any time.
          Any changes will be effective immediately upon posting the revised Privacy
          Policy on the Site. We encourage you to review this Privacy Policy
          periodically to stay informed about how we collect, use, and protect your information.
        </p>

        <h3 data-aos="fade-up">Contact Us</h3>
        <p data-aos="fade-up">
          If you have any questions, concerns, or requests regarding this Privacy
          Policy, please contact us at:
          <p data-aos="fade-up">
            Email:
            <a href="mailto:smartrepo@consulting.com">smartrepo@consulting.com</a>
          </p>
        </p>
        <p data-aos="fade-up">
          By using the SmartRepo website, you acknowledge that you have read, understood,
          and agree to be bound by the above Privacy Policy. It is recommended to read
          the complete Privacy Policy on the SmartRepo website for a comprehensive understanding.
        </p>
        <br />
        <small data-aos="fade-up">
          Last updated: 20th September, 2023
        </small>
      </div>
    </div>
    <footer data-aos="fade-up">
      <small className={`${style.footerTextB}`}>
        <NavLink to="/terms-of-use" className={`${style.footerText}`}>
          Terms of Use
        </NavLink>
        <NavLink to="/privacy" className={`${style.footerText}`}>
          Privacy Policy
        </NavLink>
      </small>

      <small className={`${style.footerTextC}`}>© 2023 SmartRepo</small>
    </footer>
    </div>
  )
}

export default Privacy