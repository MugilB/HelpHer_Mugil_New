import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

const Footer = ({
  logoSrc,
  logoAlt,
  action1,
  content2,
  column1Title,
  link1,
  link2,
  link3,
  link4,
  link5,
  column2Title,
  link6,
  link7,
  link8,
  link9,
  socialLinksTitle,
}) => {
  return (
    <footer className="footer">
      <div className="footer-max-width">
        <div className="footer-content">
          <div className="footer-newsletter">
            <img alt={logoAlt} src={logoSrc} className="footer-logo" />
            <p>Subscribe to our newsletter for updates on new features and releases.</p>
            <div className="footer-actions">
              <div className="footer-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="footer-input"
                />
                <button className="footer-button">{action1}</button>
              </div>
              <span className="footer-privacy">{content2}</span>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <strong>{column1Title}</strong>
              <ul>
                <li><a href="#">{link1}</a></li>
                <li><a href="#">{link2}</a></li>
                <li><a href="#">{link3}</a></li>
                <li><a href="#">{link4}</a></li>
                <li><a href="#">{link5}</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <strong>{column2Title}</strong>
              <ul>
                <li><a href="#">{link6}</a></li>
                <li><a href="#">{link7}</a></li>
                <li><a href="#">{link8}</a></li>
                <li><a href="#">{link9}</a></li>
              </ul>
            </div>
            <div className="footer-social">
              <strong>{socialLinksTitle}</strong>
              <div className="footer-social-icons">
                <a href="https://facebook.com" aria-label="Facebook">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://twitter.com" aria-label="Twitter">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://instagram.com" aria-label="Instagram">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-credits">
          <p>© 2023 Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  logoSrc: PropTypes.string.isRequired,
  logoAlt: PropTypes.string,
  action1: PropTypes.string,
  content2: PropTypes.string,
  column1Title: PropTypes.string,
  link1: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
  link4: PropTypes.string,
  link5: PropTypes.string,
  column2Title: PropTypes.string,
  link6: PropTypes.string,
  link7: PropTypes.string,
  link8: PropTypes.string,
  link9: PropTypes.string,
  socialLinksTitle: PropTypes.string,
};

Footer.defaultProps = {
  logoAlt: 'Logo',
  action1: 'Subscribe',
  content2: 'We respect your privacy.',
  column1Title: 'Company',
  link1: 'About Us',
  link2: 'Careers',
  link3: 'Blog',
  link4: 'Press',
  link5: 'Partners',
  column2Title: 'Support',
  link6: 'Help Center',
  link7: 'Safety Center',
  link8: 'Community Guidelines',
  link9: 'Terms of Service',
  socialLinksTitle: 'Follow Us',
};

export default Footer;
