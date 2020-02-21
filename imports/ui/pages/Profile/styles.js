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
  titleLocation: {
    display: "flex",
    flexDirection: "column"
  },
  idContainer: {
    display: "flex",
    justifyContent: "space-between"
  },
  userContainer: {
    display: "flex"
  },
  profileContainer: {
    margin: "80px 0"
  },
  social: {
    margin: " 80px 20px"
  },
  socialLinks: {
    display: "flex",
    justifyContent: "space-around",
    margin: " 50px auto",
    maxWidth: "400px"
  },
  link: {
    textDecoration: "none",
    color: theme.palette.primary.navicon
  },
  card: {
    padding: "20px 50px"
  },

  eventCard: {
    padding: "20px 50px",
    display: "flex",
    justifyContent: "space-between"
  },
  buttonsContainer: { display: "flex", flexDirection: "column" },
  button: {
    maxHeight: "50px",
    width: "220px",
    margin: "10px"
  },
  border: {
    border: "2px solid red"
  },
  icon: {
    transform: "translateY(7px)"
  },
  description: {
    maxWidth: "800px"
  }
}));

export default styles;
