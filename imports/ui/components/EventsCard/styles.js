const styles = theme => {
  return {
    card: {
      height: 350,
      border: theme.palette.secondary.main + " 3px solid",
      borderRadius: "0px"
    },
    date: {
      fontFamily: theme.fonts.secondary.main,
      textTransform: "uppercase"
    },
    image: {
      width: "100%",
      height: 150,
      borderRadius: 5,
      objectPosition: "center",
      objectFit: "cover"
    },
    eventDetails: {
      display: "flex",
      flexDirection: "column",
      padding: 10
    },
    link: {
      textDecoration: "none",
      color: theme.fonts.primary.color
    },
    notifyCounter: {
      height: 30,
      width: 30,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",
      backgroundColor: theme.palette.primary.main,
      zIndex: "1",
      fontSize: 25,
      alignSelf: "flex-end",
      boxShadow: "2px 1px 6px "
    },
    counter: {
      color: "white",
      fontWeight: "bold"
    }
  };
};

export default styles;
