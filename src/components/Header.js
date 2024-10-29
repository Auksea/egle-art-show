import React, { useState } from 'react';
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import './Header.css';

const Header = () => {
  const { t } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="header-wrapper">
      <div className="top-line-wrapper">
        
        {/* Header Name in the Center */}
        <div className="header-name">art-bernadeta.ch</div>

        {/* Language Dropdown for Desktop at the Right */}
        <div className="desktop-language-dropdown">
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              {t('dropdown.language')}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => changeLanguage('en')}>
                <span className="fi fi-gb"></span> {t('dropdown.english')}
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage('fr')}>
                <span className="fi fi-fr"></span> {t('dropdown.french')}
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage('lt')}>
                <span className="fi fi-lt"></span> {t('dropdown.lithuanian')}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <div className="top-line"></div>

      <Container>
        <Navbar expand="sm" variant="light" className="custom-navbar">
          <Navbar.Toggle />
          <Navbar.Collapse className="vertical-navbar">
            <Nav className="mr-auto">
              <Link to="/" className="nav-link">{t('navbar.home')}</Link>
              <Link to="/store" className="nav-link">{t('navbar.store')}</Link>
              <Link to="/contact" className="nav-link">{t('navbar.contact')}</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;









