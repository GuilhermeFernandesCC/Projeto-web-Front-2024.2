import React from "react";

const Layout = ({ children }) => {
  return (
    <div style={styles.container}>
        <div style={styles.triangle}>  </div> {/* Triângulo no canto */}
      {children} {/* Renderiza a página dentro do layout */}
    </div>
  );
};

const styles = {
  container: {
    width:'100vw',
    minHeight: "100vh",
    backgroundColor:"#292D32",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: 'relative',
    margin: 0, // Remove qualquer margem extra
    padding: 0, // Remove qualquer padding extra
    overflow: "hidden", // Evita que algo saia da tela
  },
  triangle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    borderRight: "30vw solid transparent", // Define a base do triângulo
    borderBottom: "30vh solid #034B97", // Cor do triângulo
  },
};

export default Layout;