import glamorous from 'glamorous';

export const NavContainer = glamorous.header({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: 'white',
  padding: '10px',
  height: '150px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  zIndex: '99',
  backgroundColor: 'white'
});

export const NavRight = glamorous.nav({
  display: 'flex',
});

export const LyonLogo = glamorous.img(({ isScrolled, isHomePage }) => ({
  width: isScrolled || !isHomePage ? '180px' : '80vh',
  position: isScrolled || !isHomePage ? 'static' : 'absolute',
  right: isScrolled || !isHomePage ? 'unset' : '-60px',
  top: isScrolled || !isHomePage ? 'unset' : '25vh',
  height: 'auto',
  transition: 'all 0.3s ease-in',
}));



export const NavItem = glamorous.a({
  color: 'white',
  textDecoration: 'none',
  margin: '0 10px',
  '&:hover': {
    textDecoration: 'underline',
  },
});
