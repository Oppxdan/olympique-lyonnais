import React, { useState, useEffect } from 'react';
import logo from '../../logo.png';
import '../../App.css';
import { Link, useLocation } from 'react-router-dom';
import { NavContainer, NavRight, LyonLogo } from './Nav-styles';
import { slide as Menu } from 'react-burger-menu';

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
