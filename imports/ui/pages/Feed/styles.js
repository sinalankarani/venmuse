const styles = theme => ({
  feedPage: {
    backgroundColor: theme.palette.primary.background
  },
  banner: {
    padding: 0,
    margin: 0,
    width: "100%",
    height: "500px",
    overflow: "hidden",
    maxWidth: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "400px"
    }
  },
  bannerimage: {
    width: "100%",
    opacity: 0.5,
    objectFit: "cover",
    minHeight: "400px"
  },
  bannertext: {
    fontFamily: theme.fonts.secondary.main,
    fontSize: "5rem",
    position: "absolute",
    width: "100%",
    textAlign: "center",
    opacity: "100%",
    top: "17rem",
    letterSpacing: "1rem",
    verticalAlign: "middle",
    [theme.breakpoints.down("md")]: {
      letterSpacing: "0.3rem"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "4rem"
    }
  },
  title: {
    fontFamily: theme.fonts.secondary.main,
    fontSize: "4rem"
  },
  contentcontainer: {
    margin: "0 3rem",
    padding: 0
  }
});

export default styles;
