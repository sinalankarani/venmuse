const styles = theme => {
  return {
    card: {
      height: 350,
      border: theme.palette.secondary.main + " 3px solid",
      borderRadius: "0px"
    },
    image: {
      width: "100%",
      height: 150,
      borderRadius: 5,
      objectPosition: "center",
      objectFit: "cover"
    },
    venueDetails: {
      display: "flex",
      flexDirection: "column",
      padding: 10
    },
    link: {
      textDecoration: "none",
      color: theme.fonts.primary.color
    }
  };
};

export default styles;
