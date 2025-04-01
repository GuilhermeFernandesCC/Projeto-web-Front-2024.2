import React from "react";

const TextLink = ({ text, linkText, onClick }) => {
  return (
    <p style={styles.text}>
      {text}{" "}
      <span onClick={onClick} style={styles.link}>
        {linkText}
      </span>
    </p>
  );
};

const styles = {
  text: {
    fontSize: "16px",
    color: "#333",
  },
  link: {
    color: "#007bff",
    cursor: "pointer",
    fontWeight: "bold",
    textDecoration: "underline",
  },
};

export default TextLink