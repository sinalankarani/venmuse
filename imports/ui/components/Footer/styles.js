const styles = theme => {
  return {
    footerContainer: {
      marginTop: "50px",
      height: 300,
      backgroundColor: theme.palette.secondary.main,
      display: "flex",
      justifyContent: "space-around",
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        justifyContent: "flex-start"
      }
    },
    nameContainer: {
      display: "flex",
      flexDirection: "column",
      textAlign: "right"
    },
    logoContainer: {
      width: 750,
      [theme.breakpoints.down("sm")]: {
        width: 500
      }
    },
    title: {
      fontFamily: theme.fonts.secondary.main,
      textTransform: "uppercase",
      fontSize: "8rem",
      color: theme.palette.primary.main,
      opacity: 0.8,
      letterSpacing: "50px",
      borderBottom: "10px black solid",
      lineHeight: 1,
      marginTop: 50,
      textAlign: "center",
      paddingLeft: 10,
      [theme.breakpoints.down("sm")]: {
        fontSize: "4rem",
        borderBottom: "5px black solid",
        letterSpacing: "45px",
        marginTop: 85
      }
    },
    motto: {
      fontFamily: theme.fonts.secondary.main,
      textTransform: "uppercase",
      fontSize: "2rem",
      color: theme.palette.primary.background,
      opacity: 0.8,
      letterSpacing: "16px",
      lineHeight: 1,
      textAlign: "center",
      paddingLeft: 10,
      [theme.breakpoints.down("sm")]: {
        fontSize: "2rem",
        letterSpacing: "7px",
        paddingLeft: 0
      }
    },
    createdby: {
      fontFamily: theme.fonts.secondary.main,
      textTransform: "uppercase",
      fontSize: "3rem",
      color: theme.palette.primary.main,
      opacity: 0.8,
      borderBottom: "5px black solid",
      lineHeight: 1,
      marginTop: 30
    },
    names: {
      display: "flex",
      flexDirection: "column"
    },
    name: {
      fontFamily: theme.fonts.secondary.main,
      textTransform: "uppercase",
      color: theme.palette.primary.background,
      fontSize: "2rem",
      textDecoration: "none",
      transition: "150ms",
      "&:hover": {
        color: theme.palette.primary.main,
        opacity: 0.8
      }
    }
  };
};

export default styles;
