const styles = theme => ({
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("md")]: {
      display: "grid"
    }
  }
});
export default styles;
