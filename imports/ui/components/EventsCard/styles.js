const styles = () => {
  return {
    card: {
      height: 220,
      backgroundImage:
        "https://images.unsplash.com/photo-1556035511-3168381ea4d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      margin: 10
    },
    media: {
      height: "50%",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      position: "relative"
    },
    content: {
      color: "black",
      height: "50%"
    }
  };
};

export default styles;
