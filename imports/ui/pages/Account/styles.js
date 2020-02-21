const styles = theme => ({
  formcontainer: {
    display: "flex",
    flexDirection: "column",
    width: "75vw"
  },
  formtitle: {
    fontFamily: theme.fonts.secondary.main,
    fontSize: "3rem",
    lineHeight: 1,
    marginBottom: "1.5rem"
  },
  formlabel: {
    fontFamily: theme.fonts.secondary.main,
    fontSize: "2rem"
  },
  button: {
    marginTop: "1.5rem",
    fontFamily: theme.fonts.secondary.main,
    fontSize: "3rem",
    transition: "100ms",
    "&:hover": {
      color: theme.palette.primary.background,
      background: theme.palette.primary.main,
      letterSpacing: "10px"
    }
  }
});

export default styles;
