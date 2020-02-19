const styles = theme => {
  return {
    appbar: {
      backgroundColor: "white",
      boxShadow: "none",
      borderBottom: theme.palette.secondary.main + " 2px solid",
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
    link: {
      textDecoration: "none",
      color: "black",
      "&:visited": {
        color: "black"
      },
      opacity: 1
    },
    logout: {
      background: "none",
      border: "none",
      fontSize: "0.875rem",
      padding: "0",
      cursor: "pointer",
      fontFamily: theme.fonts.primary.main,
      opacity: 1
    },
    accountbtn: {
      transform: "translateY(5px)",
      color: "gray",
      fontSize: "2.5rem",
      marginRight: "1.5rem",
      "&:hover": {
        color: theme.palette.secondary.main
      }
    },
    logoutbtn: {
      transform: "translateY(5px)",
      color: "gray",
      fontSize: "2.5rem",
      "&:hover": {
        color: theme.palette.secondary.main
      }
    },
    explorebtn: {
      marginRight: "2rem"
    },
    navlinks: {
      width: "400px",
      display: "flex",
      justifyContent: "flex-end"
    }
  };
};

export default styles;
