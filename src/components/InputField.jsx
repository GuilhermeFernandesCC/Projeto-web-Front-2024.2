import React from "react";

const InputField = ({ label, value, onChange, type = "text" }) => {
  return (
    <div style={styles.container}>
      <input 
        type={type}
        value={value}
        onChange={onChange}
        required
        style={styles.input}
      />
      <label style={styles.label}>{label}</label>
    </div>
  );
};

const styles = {
  container: {
    position: "relative",
    width: "100%",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "12px",
    border: "2px solid #888",
    borderRadius: "5px",
    fontSize: "16px",
    outline: "none",
    background: "transparent",
  },
  label: {
    position: "absolute",
    top: "-10px",
    left: "10px",
    backgroundColor: "#fff",
    padding: "0 5px",
    fontSize: "14px",
    color: "#888",
  },
};

export default InputField;