import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import './Footer1.css';

const Footer1 = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer-container">
      <h5>{t('footer.contactUs')}</h5>
      <div className="contact-info">
        <p>{t('footer.email')}: interest120@gmail.com</p>
      </div>
      <div className="social-icons">
        <a href="https://www.facebook.com/egle.tarnapaviciute">
          <FontAwesomeIcon icon={faFacebook} className="icon facebook-icon" />
        </a>
        <a href="https://www.instagram.com/art.blue.ete/?fbclid=IwAR0y7w2zT92_QaJX92uyzx_ej6ZlPvEwZ7PHXdeS_B_uAXDDzREjR9yWShk">
          <FontAwesomeIcon icon={faInstagram} className="icon instagram-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer1;



