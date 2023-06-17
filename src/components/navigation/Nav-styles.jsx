import glamorous from 'glamorous';

export const NavContainer = glamorous.header({
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  padding: '10px',
  height: '250px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
});

export const NavRight = glamorous.div({
  display: 'flex',
});


export const NavItem = glamorous.a({
  color: 'white',
  textDecoration: 'none',
  margin: '0 10px',
  '&:hover': {
    textDecoration: 'underline',
  },
});
