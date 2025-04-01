import React from "react";

const Cabecalho = () => {
    return (
      <header style={styles.header}>
        <h1 style={styles.title}>Lunar Maps</h1>
        <nav style={styles.nav}>
          <a href="/" style={styles.link}>Início</a>
          <a href="/sobre" style={styles.link}>Sobre</a>
          <a href="/contato" style={styles.link}>Contato</a>
        </nav>
      </header>
    );
  };
  
  const styles = {
    header: {
      position: "fixed", // Fixa no topo
      top: 0,
      left: 0,
      width: "100%", // Ocupa toda a largura da tela
      backgroundColor: "#034B97", // Cor do fundo
      color: "#fff", // Cor do texto
      padding: "15px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      zIndex: 1000, // Mantém o cabeçalho sobre outros elementos
    },
    title: {
      margin: 0,
      fontSize: "24px",
    },
    nav: {
      display: "flex",
      gap: "15px",
    },
    link: {
      color: "#fff",
      textDecoration: "none",
      fontSize: "16px",
    },
  };
  
  export default Cabecalho;