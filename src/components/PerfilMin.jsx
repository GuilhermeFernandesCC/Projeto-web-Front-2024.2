const PerfilMin = () =>{

return (
    <div style={styles.container}>
      {user?.profileImage ? (
        <img src={user.profileImage} alt="Foto de perfil" style={styles.image} />
      ) : (
        <div style={styles.placeholder}>?</div> // Mostra um ícone padrão se não houver imagem
      )}
      <h2 style={styles.name}>{user.name}</h2>
      <p style={styles.email}>{user.email}</p>
    </div>

    
)};


const styles = {
    container: {
      padding: "20px",
      border: "2px solid #888",
      borderRadius: "10px",
      width: "300px",
      margin: "20px auto",
      textAlign: "center",
      backgroundColor: "#f5f5f5",
    },
    image: {
      width: "100px",
      height: "100px",
      borderRadius: "50%", // Deixa a imagem redonda
      objectFit: "cover",
      border: "2px solid #888",
      marginBottom: "10px",
    },
    placeholder: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      backgroundColor: "#ccc",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "40px",
      color: "#666",
      marginBottom: "10px",
    },
    name: {
      fontSize: "20px",
      margin: "5px 0",
    },
    email: {
      fontSize: "16px",
      color: "#666",
    },
}

export default PerfilMin