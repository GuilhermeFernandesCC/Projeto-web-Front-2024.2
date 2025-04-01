import React from "react";

const BotaoSalvar = ({ text, onClick, variant = "primary", fullWidth = false }) => {
    return (
      <button onClick={onClick} style={{ ...styles.button, ...styles[variant], width: fullWidth ? "100%" : "auto" }}>
        {text}
      </button>
    );
  };
  
  const styles = {
    button: {
      padding: "12px 20px",
      fontSize: "16px",
      fontWeight: "bold",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background 0.3s",
    },
    primary: {
      backgroundColor: "#0066FF",
      color: "#fff",
    },
    secondary: {
      backgroundColor: "#6c757d",
      color: "#fff",
    },
    danger: {
      backgroundColor: "#dc3545",
      color: "#fff",
    },
  };
  
  export default BotaoSalvar;