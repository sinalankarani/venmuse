const styles = theme => {
  return {
    appbar: {
      backgroundColor: "white",
      boxShadow: "none",
      borderBottom: theme.palette.secondary.main + " 1px solid"
    },
    root: {
      flexGrow: 1
    },
    title: {
      flexGrow: 1
    },
    link: {
      textDecoration: "none",
      color: "black",
      "&:visited": {
        color: "black"
      }
    },
    logout: {
      background: "none",
      border: "none",
      fontSize: "0.875rem",
      padding: "0",
      cursor: "pointer",
      fontFamily: theme.fonts.primary.main
    }
  };
};

export default styles;
