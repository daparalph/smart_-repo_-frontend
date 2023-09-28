import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import style from './styles/directive.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Terms = () => {

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
      <div className={style.content}>
        <p>
          <b>Effective Date:</b>
          20th September, 2023
        </p>
        <p data-aos="fade-up">
          These Terms & Conditions (&#34;Terms&#34;) govern your use of the SmartRepo and
          Partners website (&#34;Site&#34;) provided by SmartRepo  (&#34;SmartRepo,&#34;
          &#34;we&#34;, &#34;us&#34;, or &#34;our&#34;). By accessing or using the Site, you agree
          to be bound by these Terms. If you do not agree with any part of these Terms,
          please do not use the Site.
        </p>

        <h3 data-aos="fade-up">Site Use and Restrictions</h3>
        <p data-aos="fade-up">
          1.1 Acceptance of Terms: By using the Site, you acknowledge that you have read,
          understood, and agree to be bound by these Terms.
        </p>
        <p data-aos="fade-up">
          1.2 Changes to Terms: SmartRepo reserves the right to modify, update, or replace
          these Terms at any time without prior notice. It is your responsibility to
          review these Terms periodically for any changes. Your continued use of the
          Site after the posting of any changes constitutes your acceptance of the
          modified Terms.
        </p>
        <p data-aos="fade-up">
          1.3 Lawful Use: You agree to use the Site only for lawful purposes and in a manner
          that does not infringe the rights of others or restrict or inhibit the use and
          enjoyment of the Site by any third party.
        </p>
        <p data-aos="fade-up">
          1.4 Age Restrictions: The Site is not intended for use by individuals under the
          age of 16. By using the Site, you confirm that you are at least 16 years old.
          SmartRepo does not knowingly collect personal information from individuals
          under the age of 16. If we become aware that we have collected personal
          information from someone under 16 without parental consent, we will take
          steps to delete such information.
        </p>
        <p data-aos="fade-up">
          1.5 Intellectual Property: The content on the Site, including but not limited to
          text, graphics, images, videos, logos, trademarks, and software, is protected
          by intellectual property rights owned by SmartRepo and its licensors. You may
          not modify, reproduce, distribute, transmit, display, perform, publish, license,
          create derivative works from, or sell any content obtained from the Site
          without prior written consent from SmartRepo.
        </p>
        <p data-aos="fade-up">
          1.6 Prohibited Conduct: You agree not to use the Site to:
          <ul className={style.subList}>
            <li data-aos="fade-up">
              Violate any applicable law, regulations, or third-party rights;
            </li>
            <li data-aos="fade-up">
              Engage in any fraudulent, abusive, or unlawful activities;
            </li>
            <li data-aos="fade-up">
              Use the Site to transmit any viruses, malware, or other harmful code;
            </li>
            <li data-aos="fade-up">
              Interfere with the proper functioning of the Site or disrupt the servers or
              networks connected to the Site;
            </li>
            <li data-aos="fade-up">
              Attempt to gain unauthorized access to any portion of the Site or any other
              systems or networks connected to the Site;
            </li>
            <li data-aos="fade-up">
              Impersonate any person or entity or falsely state or otherwise misrepresent your
              affiliation with a person or entity;
            </li>
            <li data-aos="fade-up">
              Collect or store personal data about other users without their consent;
            </li>
            <li data-aos="fade-up">
              Use the Site for any commercial purposes without our prior written consent.
            </li>
          </ul>
        </p>

        <h3 data-aos="fade-up">Disclaimer of Warranties</h3>
        <p data-aos="fade-up">
          2.1 Site &#34;As Is&#34;: The Site and its content are provided on an &#34;as is&#34;
          and &#34;as available&#34; basis without any warranties of any kind, express or
          implied. SmartRepo disclaims all warranties, including but not limited to
          implied warranties of merchantability, fitness for a particular purpose,
          accuracy, reliability, and non-infringement.
        </p>
        <p data-aos="fade-up">
          2.2 No Guarantee of Site Availability: SmartRepo does not guarantee that the
          Site will be uninterrupted, error-free, or available at all times.
          We reserve the right to modify, suspend, or discontinue any part of the
          Site without prior notice.
        </p>
        <p data-aos="fade-up">
          2.3 Third-Party Content: SmartRepo does not endorse or warrant the accuracy,
          reliability, or legality of any content provided by third parties on the Site.
          Any reliance on such content is at your own risk.
        </p>

        <h3 data-aos="fade-up">Limitation of Liability</h3>
        <p data-aos="fade-up">
          3.1 Exclusion of Damages: To the maximum extent permitted by applicable law, SmartRepo
          and its officers, directors, employees, agents, affiliates,  shall not
          be liable for any indirect, incidental, special, consequential, or punitive damages
          arising out of or in connection with your use of the Site, even if advised of the
          possibility of such damages.
        </p>
        <p data-aos="fade-up">
          3.2 Limitation of Liability: In no event shall SmartRepo and its officers, directors,
          employees, agents, affiliates,  be liable for any direct damages
          exceeding the amount you have paid, if any, to SmartRepo for accessing or using
          the Site during the three (3) months preceding the event giving rise to the
          liability.
        </p>

        <h3 data-aos="fade-up">Privacy</h3>
        <p data-aos="fade-up">
          4.1 Collection of Information: By using the Site, you agree to the collection, use,
          and disclosure of your information as set forth in our Privacy Policy.
        </p>

        <h3 data-aos="fade-up">Governing Law and Jurisdiction</h3>
        <p>
          5.1 Governing Law: These Terms shall be governed by and construed in accordance
          with the laws of the Federal Republic of Nigeria, without regards to its conflict
          of law provisions.
        </p>
        <p data-aos="fade-up">
          5.2 Dispute Resolution: Any dispute arising out of or relating to these Terms or your
          use of the Site shall be resolved through good faith negotiations. If a resolution
          cannot be reached, the dispute shall be submitted to binding arbitration in
          accordance with the rules of Federal Republic of Nigeria. However, disputes related
          to intellectual property rights may be brought before a court of competent
          jurisdiction.
        </p>

        <h3 data-aos="fade-up">Miscellaneous</h3>
        <p data-aos="fade-up">
          6.1 Severability: If any provision of these Terms is held to be invalid or
          unenforceable, such provision shall be struck, and the remaining provisions shall
          continue to be valid and enforceable to the fullest extent under the law.
        </p>
        <p data-aos="fade-up">
          6.2 Entire Agreement: These Terms constitute the entire agreement between you and SmartRepo
          regarding your use of the Site and supersede any prior agreements or understandings.
        </p>
        <p data-aos="fade-up">
          6.3 Contact Information: If you have any questions or concerns about these Terms,
          please contact us at info@elkanisgroup.com
        </p>
        <p data-aos="fade-up">
          By using the SmartRepo  website, you acknowledge that you have read,
          understood, and agree to be bound by the above Terms & Conditions. It is recommended
          to read the complete Terms & Conditions on the SmartRepo website for a comprehensive
          understanding.
        </p>
      </div>
      <footer>
        <small className={`${style.footerTextB}`}>
          <NavLink to="/terms-of-use" className={`${style.footerText}`}>
            Terms of Use
          </NavLink>
          <NavLink to="/privacy" className={`${style.footerText}`}>
            Privacy Policy
          </NavLink>
        </small>

        <small className={`${style.footerTextC}`} data-aos="fade-up">© 2023 SmartRepo</small>
      </footer>
    </div>
  </div>
  )
}

export default Terms