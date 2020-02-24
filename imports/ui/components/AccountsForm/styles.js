const styles = theme => ({
  formContainer: {
    position: "relative",
    padding: 10,
    height: "500px",
    width: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: theme.palette.primary.main + " 5px solid"
  },
  form: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  title: {
    textTransform: "uppercase",
    textAlign: "center",
    fontFamily: theme.fonts.secondary.main,
    fontSize: "3rem",
    lineHeight: "1.25"
  },
  fields: {
    height: "65%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  button: {
    width: "250px",
    fontFamily: theme.fonts.secondary.main,
    fontSize: "1.5rem",
    padding: "0.5rem",
    lineHeight: "1",
    "&:hover": {
      background: "none",
      color: theme.palette.primary.main
    }
  },
  icon: {
    position: "absolute",
    opacity: "0.5",
    top: 0,
    left: 0,
    transform: "translate(-50%, -50%)",
    fontSize: 84,
    opacity: 0.1
  },
  error: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
    textTransform: "uppercase"
  },
  buttonContainer: {
    height: "25%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "space-between",
    marginTop: "2rem"
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    height: "75px",
    transform: "translateY(25px)",
    justifyContent: "center"
  },
  togglelabel: {
    fontFamily: theme.fonts.secondary.main,
    fontSize: "3rem",
    lineHeight: "1.25"
  },
  toggleswitch: {
    position: "absolute",
    transform: "translateY(2rem)"
  },
  submitbutton: {
    width: "250px",
    fontFamily: theme.fonts.secondary.main,
    fontSize: "1.5rem",
    padding: "0.5rem",
    lineHeight: "1",
    color: theme.palette.primary.background,
    backgroundColor: theme.palette.primary.main,
    transition: "100ms",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      letterSpacing: "3px"
    }
  }
});

export default styles;
