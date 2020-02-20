const styles = theme => {
  return {
    card: {
      height: 350
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
    applied: {
      border: "2px solid red"
    }
  };
};

export default styles;
