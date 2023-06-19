import glamorous from 'glamorous';

export const BannerContainer = glamorous.section({
  height: '80vh',
  marginTop: '-20px',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '50px',
  color: 'white',
  background: 'linear-gradient(to right, #ea0e4f, #0c1d9a)'
});

export const BannerHeading = glamorous.h1({
  fontSize: '45px',
  textAlign: 'center',
  width: '50%'
});
