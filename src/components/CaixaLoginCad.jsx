import React from "react";

const Caixa = ({ children }) => {

    return (
        <div style={styles.container}>{children}</div>
    )
}

const styles = {
    container: {
      display:'flex',
      flexDirection:'column',
      width: "35vw", 
      height: "fit-content",
      backgroundColor: "#fff", // Fundo branco ou outra cor desejada
      padding: "20px",
      borderRadius: "10px", // Bordas arredondadas para um visual moderno
      border: "black",
      gap:'10px'
    },
  };

export default Caixa