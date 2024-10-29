import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <Helmet>
        <title>{t('gallery.home.title')}</title>
        <hr className="decorative-line" />
        <meta name="description" content={t('gallery.home.description')} />
        <meta name="keywords" content={t('gallery.home.keywords')} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <div className="content-wrapper">
        {/* First row: Abstract Art Text and Empty Column */}
        <div className="first-row">
          <div className="left">
            <h1 className="headingHome">{t('home.abstract_art')}</h1>
            <hr className="decorative-line" />
            <p className="homeParagraph">{t('home.abstract_art_description')}</p>
          </div>
          <div className="right"></div>
        </div>

        {/* Second row: Image and About Me Text */}
        <div className="row">
          <div className="column left">
            <img
              className="centered-img"
              src="/pics/background2.webp"
              alt="Artwork"
            />
          </div>
          <div className="column right">
            <h1 className="headingHome">{t('home.about_me')}</h1>
            <hr className="decorative-line" />
            <p className="homeParagraph">{t('home.about_me_description')}</p>
            <blockquote className="homeQuote">
              {t('home.art_voice')}
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
