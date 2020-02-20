import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#FF9633", //orange
      background: "#F7F7F7", //off-white
      title: "#000000", //black
      navicon: "#24252b" //dark off-gray
    },
    secondary: {
      main: "#67687A" //off-gray
    }
  },
  fonts: {
    primary: {
      main: "Roboto, sans-serif",
      color: "#303030"
    },
    secondary: {
      main: "Dhurjati, sans-serif"
    }
  }
});
