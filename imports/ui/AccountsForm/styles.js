import { createStyles } from "@material-ui/core";

const styles = (theme = createStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    // width: "75%",
    // margin: "auto"
  },
  //   signupContainer: {
  //       display: "flex",
  //       flexDirection: "column"
  //   }
  accountsFormContainer: {
    display: "flex",
    flexDirection: "column"
  }
}));

export default styles;
