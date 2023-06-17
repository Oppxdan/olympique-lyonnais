import React, { useState, useEffect } from 'react';
import logo from '../../logo.png';
import '../../App.css';
import { Link, useLocation } from 'react-router-dom';
import { NavContainer, NavRight, LyonLogo } from './Nav-styles';

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    setIsHomePage(location.pathname === "/");
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  return (
    <NavContainer className={isScrolled ? 'sticky' : ''}>
      <Link to="/">
        <LyonLogo
          src={logo}
          alt="logo"
          isScrolled={isScrolled}
          isHomePage={isHomePage}
          css={{
            width: isScrolled || !isHomePage ? '180px' : '40vw',
            position: isScrolled || !isHomePage ? 'static' : 'absolute',
            right: isScrolled || !isHomePage ? 'unset' : '-60px',
            top: isScrolled || !isHomePage ? 'unset' : '20vh',
            height: 'auto',
            transition: 'all 0.3s ease-in',
          }}
        />
      </Link>
      <NavRight>
        <Link to="about">
          About Us
        </Link>
      </NavRight>
    </NavContainer>
  );
}

export default Nav;
