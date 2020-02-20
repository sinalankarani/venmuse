import { createStyles } from "@material-ui/core";

const styles = createStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  gravatar: {
    borderRadius: "30px",
    marginRight: "20px"
  },
  banner: {
    width: "100%",
    maxHeight: "400px",
    objectFit: "cover"
  },
  idContainer: {
    display: "flex"
  }
}));

export default styles;
