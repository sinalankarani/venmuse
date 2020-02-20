const styles = theme => ({
  artistPage: {
    backgroundColor: theme.palette.primary.background,
    marginTop: "80px"
  },
  banner: {
    padding: 0,
    margin: 0,
    width: "100%",
    height: "500px",
    overflow: "hidden",
    maxWidth: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "550px"
    },
    [theme.breakpoints.down("sm")]: {
      height: "600px"
    },
    [theme.breakpoints.down("xs")]: {
      height: "650px"
    }
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
    letterSpacing: "1rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "3rem"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "3rem",
      transform: "translateY(-6rem)"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.8rem",
      transform: "translateY(-11rem)"
    }
  }
});

export default styles;
