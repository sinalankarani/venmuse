const styles = theme => {
  return {
    banner: {
      padding: 0,
      margin: 0,
      width: "100%",
      height: "500px",
      overflow: "hidden",
      maxWidth: "100%"
    },
    bannerimage: {
      width: "100%",
      opacity: 0.5
    },
    bannertext: {
      fontFamily: theme.fonts.secondary.main,
      fontSize: "5rem",
      position: "absolute",
      width: "100%",
      textAlign: "center",
      opacity: "100%",
      top: "25vh",
      letterSpacing: "1rem"
    },
    title: {
      fontFamily: theme.fonts.secondary.main,
      fontSize: "4rem"
    },
    contentcontainer: {
      margin: "0 3rem",
      padding: 0
    }
  };
};

export default styles;
