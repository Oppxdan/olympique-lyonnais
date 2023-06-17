import glamorous from 'glamorous';

export const NavContainer = glamorous.header({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: 'white',
  padding: '10px',
  height: '150px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
});

export const NavRight = glamorous.nav({
  display: 'flex',
});

export const LyonLogo = glamorous.img(
  {
    right: '0',
    top: '20vh',
    height: 'auto',
    transition: 'all 0.3s ease-in',
  },
  (props) => ({
    width: props.isScrolled ? '180px' : '60vw',
    position: props.isScrolled ? 'static' : 'absolute',
  })
);


export const NavItem = glamorous.a({
  color: 'white',
  textDecoration: 'none',
  margin: '0 10px',
  '&:hover': {
    textDecoration: 'underline',
  },
});
