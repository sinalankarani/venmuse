const styles = theme => {
  return {
    card: {
      height: 350,
      border: theme.palette.secondary.main + " 3px solid",
      borderRadius: "0px",
      transition: "150ms",
      "&:hover": {
        border: theme.palette.primary.main + " 3px solid"
      }
    },
    image: {
      width: "100%",
      height: 150,
      borderRadius: 0,
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
    },
    icon: {
      fontSize: "1rem",
      transform: "translateY(2px) translateX(-3px)"
    },
    title: {
      fontFamily: theme.fonts.secondary.main,
      textTransform: "uppercase",
      fontSize: "2rem",
      lineHeight: 1
    },
    location: {
      fontSize: "1rem",
      textTransform: "uppercase",
      fontWeight: "bold"
    }
  };
};

export default styles;
