import React, {useState, useEffect} from "react";


const PerfilMin = ({user}) =>{

    return (
        <div style={styles.container}>
        {user?.profileImage ? (
            <img src={user.profileImage} alt="Foto de perfil" style={styles.image} />
        ) : (
            <img src="src/assets/perfil-de-usuario.png"  style={styles.image}/> // Mostra um ícone padrão se não houver imagem
        )}
        <div style={styles.container2}>
            <h2 style={styles.name}>{user.name}</h2>
            <p style={styles.email}>{user.email}</p>
        </div>
        </div>

    
)};


const styles = {
    container: {
      display:'flex',
      padding: "10px",
      border: "2px solid #888",
      borderRadius: "10px",
      width: "auto",
      gap:'20px',
      textAlign: "center",
      backgroundColor: "#f5f5f5",
      justifyContent: 'space-between',
    },
    container2:{

    },
    image: {
      width: "50px",
      height: "50px",
      borderRadius: "50%", // Deixa a imagem redonda
      objectFit: "cover",
      border: "2px solid #888",
      marginBottom: "10px",
    },
    name: {
      fontSize: "20px",
      margin: "5px 0",
      color: "#666",
    },
    email: {
      fontSize: "16px",
      color: "#666",
    },
}

export default PerfilMin