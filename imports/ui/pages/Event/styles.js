const styles = theme => ({
  eventPage: {
    backgroundColor: theme.palette.primary.background
  },
  banner: {
    padding: 0,
    margin: 0,
    marginBottom: "3rem",
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
    opacity: 0.5,
    transform: "translateY(-10rem)"
  },
  bannertext: {
    fontFamily: theme.fonts.secondary.main,
    fontSize: "5rem",
    position: "absolute",
    width: "100%",
    textAlign: "center",
    opacity: "100%",
    top: "19vh",
    letterSpacing: "1rem",
  }
});

export default styles;
