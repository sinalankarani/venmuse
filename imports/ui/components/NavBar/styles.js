const styles = theme => {
  return {
    appbar: {
      backgroundColor: "white",
      boxShadow: "none",
      borderBottom: theme.palette.secondary.main + " 3px solid",
      position: "fixed",
      width: "100%",
      top: 0,
      opacity: 0.8
    },
    nav: {
      display: "flex",
      justifyContent: "space-between"
    },
    root: {
      flexGrow: 1
    },
    title: {
      flexGrow: 1,
      opacity: 1
    },
    logo: {
      [theme.breakpoints.down("xs")]: {
        display: "none"
      }
    },
    logomobile: {
      [theme.breakpoints.up("sm")]: {
        display: "none"
      },
      [theme.breakpoints.down("xs")]: {
        display: "block"
      }
    },
    link: {
      textDecoration: "none",
      color: "black",
      "&:visited": {
        color: "black"
      },
      "&:hover": {
        color: theme.palette.primary.main
      },
      opacity: 1
    },
    linkcontainer: {
      display: "flex",
      flexDirection: "column",
      width: "25vw",
      opacity: "0.8"
    },
    linklabel: {
      textAlign: "center",
      fontFamily: theme.fonts.secondary.main,
      fontSize: "2rem"
    },
    linkbtn: {
      fontSize: "4rem",
      transform: "translateY(0.75rem)"
    },
    discoverbtn: {
      transform: "translateY(5px)",
      fontSize: "2.4rem",
      margin: "0 auto"
    },
    profilebtn: {
      transform: "translateY(5px)",
      fontSize: "2.5rem",
      margin: "0 auto"
    },
    logoutbtn: {
      transform: "translateY(5px)",
      fontSize: "2.4rem",
      margin: "0 auto"
    },
    btncontainer: {
      display: "flex",
      flexDirection: "column",
      width: "125px",
      "&:hover": {
        color: theme.palette.primary.main
      },
      [theme.breakpoints.down("md")]: {
        width: "70px"
      }
    },
    discoverlabel: {
      fontSize: "1.1rem",
      transform: "translateY(2px)",
      lineHeight: "10px",
      fontFamily: theme.fonts.secondary.main
    },
    profilelabel: {
      fontSize: "1.1rem",
      lineHeight: "10px",
      fontFamily: theme.fonts.secondary.main
    },
    logoutlabel: {
      fontSize: "1.1rem",
      transform: "translateY(0.75px)",
      lineHeight: "10px",
      fontFamily: theme.fonts.secondary.main
    },
    navlinks: {
      width: "375px",
      display: "flex",
      justifyContent: "space-between",
      [theme.breakpoints.down("xs")]: {
        width: "210px"
      }
    },
    fullList: {
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between"
    }
  };
};

export default styles;
