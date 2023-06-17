import React, { useState, useEffect } from 'react';
import logo from '../../logo.png';
import '../../App.css';
import { Link } from 'react-router-dom';
import { LyonLogo, NavContainer, NavRight } from './Nav-styles';

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavContainer>
      <Link to="/">
        <LyonLogo
          src={logo}
          className={`App-logo ${isScrolled ? 'small-logo' : 'large-logo'}`}
          alt="logo"
          isScrolled={isScrolled}
          setIsScrolled={setIsScrolled}
        />
      </Link>
      <NavRight>
        <nav></nav>
      </NavRight>
    </NavContainer>
  );
}

export default Nav;
