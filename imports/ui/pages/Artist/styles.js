const styles = theme => ({
  artistPage: {
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
    top: "19vh",
    letterSpacing: "1rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "4rem",
      transform: "translateY(-3rem)"
    }
  }
});

export default styles;
