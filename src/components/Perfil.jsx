import React, {useState} from "react";
import InputField from './InputField'
import { updateUserProfile } from "../services/api";

const PerfilModal = ({ user, onClose}) => {
    if (!user) return null; // Evita erro se user for null
    const token = localStorage.getItem('token')
    const [nome, setNome] = useState(user?.name || "");
    const [email, setEmail] = useState(user?.email || "");
    const [senha, setSenha] = useState("")
    const handleSubmit = () => {
        updateUserProfile(token,nome,email,senha)
    };

    return (
        <>
        <div style={styles.overlay} onClick={onClose}>
        <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeButton} onClick={onClose}>X</button>
            <div style={styles.container}>
            <img src={user.profileImage || "src/assets/perfil-de-usuario.png"} alt="Perfil" style={styles.image} />
            <form onSubmit={handleSubmit}>
                <InputField onChange={(e) => setNome(e.target.value)} label='Name' value={nome}></InputField>
                <InputField onChange={(e) => setEmail(e.target.value)} label='Email' value={email}></InputField>
                <InputField onChange={(e) => setSenha(e.target.value)} label='Nova Senha' ></InputField>
                <button type='submit' style={styles.editButton}>Salvar </button>
            </form>
            </div>
            
        </div>
        </div>
        </>
    );
};

const styles = {
overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.5)", // Fundo escuro transparente
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
},
modal: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "auto",
    textAlign: "center",
    position: "relative",
},
closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
},
editButton: {
    marginTop: "10px",
    padding: "10px",
    background: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer",
},
image: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
},
dados: {
    color: "#666",
    fontSize: '20px'
},
container:{
    gap:'20px',
    padding: '15px',
    display:'flex',
    justifyContent:'space-around'
}
};

export default PerfilModal;