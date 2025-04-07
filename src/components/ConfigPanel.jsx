import React, { useEffect,useState } from "react";
import InputField from "./InputField"
import { updateTable,deleteTable, addJogador } from "../services/api"
import { useNavigate } from "react-router-dom";
const ConfigPanel = ({table,onClose}) => {
    const nav = useNavigate();

    const [name, setName] = useState("");
    const [tableId, setTableId] = useState("");
    const [emailNew, setEmail] = useState("")
    const token = localStorage.getItem("token");


    useEffect(() => {
        const fetchData = async () => { 
            if(table){
                setTableId(table.id)
                setName(table.name)
                return
            }
        }
        fetchData()
    },[])
    
    const handleNewPlayer = async () =>{
        try{
            const response = await addJogador(token,tableId,emailNew)
            if(response.status===200){
                alert(`Jogador `+String(response.data.name)+"Adicionado")
            }else{
                alert("Erro ao adicionar Jogador Verifique se o Email está correto")
            }
            
        }catch(error){
            nav("/")
        }
        onClose()


    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        await updateTable(token,tableId,name)
        onClose()
    };

    const handleDelete = async () => {
        const response = await deleteTable(token,tableId)
        nav('/dashboard')
    }
    console.log(name,tableId)
    return (
        <div style={styles.overlay} onClick={onClose}>
        <div id='configModal' style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeButton} onClick={onClose}>X</button>
            <div style={styles.container}>
                
                <form onSubmit={handleNewPlayer}>
                    <InputField onChange={(e)=> setEmail(e.target.value)} label="Email Novo Jogador"></InputField>
                    <button type='submit' style={styles.editButton}>Adicionar Jogador</button>
                </form>
                <form onSubmit={handleSubmit}>
                    <InputField onChange={(e) => setName(e.target.value)} label='Nome da Mesa' value={name}></InputField>
                    <button type='submit' style={styles.editButton}>Salvar Edição</button>
                </form>
                <button onClick={handleDelete} style={styles.deleteButton}>Apagar Mesa</button>
            </div>
            
        </div>
        </div>
    )
}
const styles={
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
        padding: "25px",
        borderRadius: "10px",
        width: "auto",
        textAlign: "center",
        position: "relative",
        zIndex:10,
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
    deleteButton: {
        marginTop: "10px",
        padding: "10px",
        background: "red",
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
}

export default ConfigPanel;