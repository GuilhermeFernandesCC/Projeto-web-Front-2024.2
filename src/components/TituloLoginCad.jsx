import React from "react";

const TitleContainer = ({ title, children }) => {
  return (
    <h2 style={styles.title}>{title}</h2>
  );
};

const styles = {
    title: {
      marginBottom: "10px",
      fontSize: "48px",
      fontWeight: "bold",
      textAlign: "center",
      color: "#3385FF",
    },
    content: {
      textAlign: "left",
    },
  };

export default TitleContainer;