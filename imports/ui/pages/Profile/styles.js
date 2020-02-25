import { createStyles } from '@material-ui/core';

const styles = createStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  gravatar: {
    borderRadius: '50px',
    marginRight: '20px',
    width: '5rem',
    height: '5rem'
  },
  banner: {
    width: '100%',
    maxHeight: '400px',
    objectFit: 'cover',
    opacity: 0.7
  },
  titleLocation: {
    display: 'flex',
    flexDirection: 'column'
  },
  googleMap: {
    margin: '16px 0'
  },
  idContainer: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  userContainer: {
    display: 'flex'
  },
  profileContainer: {
    margin: '80px 0',
    marginBottom: 50
  },
  social: {
    margin: ' 80px 20px'
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: ' 50px auto',
    maxWidth: '400px'
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.navicon
  },
  card: {
    padding: '20px 50px'
  },

  eventCard: {
    padding: '20px 50px',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 25
  },
  myEventsContainer: {
    margin: '0 3rem'
  },
  myEventsTitle: {
    fontFamily: theme.fonts.secondary.main,
    fontSize: '3rem',
    textTransform: 'uppercase'
  },
  buttonsContainer: { display: 'flex', flexDirection: 'column' },
  button: {
    maxHeight: '50px',
    width: '220px',
    margin: '10px'
  },
  border: {
    border: '2px solid red'
  },
  icon: {
    transform: 'translateY(7px)'
  },
  description: {
    maxWidth: '800px'
  },
  button: {
    maxHeight: 60,
    width: 250,
    fontFamily: theme.fonts.secondary.main,
    fontSize: '1.2rem',
    backgroundColor: 'transparent',
    color: theme.palette.secondary.main,
    border: theme.palette.secondary.main + ' 3px solid',
    transition: '100ms',
    marginTop: '1.5rem',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.background,
      border: theme.palette.primary.main + ' 3px solid',
      letterSpacing: '3px'
    }
  },
  titleLabel: {
    fontFamily: theme.fonts.secondary.main,
    textTransform: 'uppercase',
    fontSize: '4rem'
  },
  userType: {
    fontFamily: theme.fonts.secondary.main,
    textTransform: 'uppercase',
    fontSize: '2rem',
    transform: 'translateY(-20px)'
  },
  divider: {
    fontSize: '3rem'
  },
  description: {
    marginBottom: 50
  }
}));

export default styles;
