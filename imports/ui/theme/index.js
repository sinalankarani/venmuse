import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#FF9633", //orange
      background: "#F7F7F7", //off-white
      title: "#000000" //black
    },
    secondary: {
      main: "#67687A" //off-gray
    }
  },
  fonts: {
    primary: {
      main: "Roboto, sans-serif"
    },
    secondary: {
      main: "Dhurjati, sans-serif"
    }
  }
});
