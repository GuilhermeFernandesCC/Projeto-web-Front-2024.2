import React, {useEffect,useState} from "react";
import Token from "./Token"
import { useParams, useLocation,useNavigate } from "react-router-dom";
import { useCoresJogadores } from "../services/coresjogadores"
import { getUserProfile, removeJogador } from "../services/api";
const JogadorBox = ({user,tableId,isMestre}) => {
    const { getCorJogador } = useCoresJogadores()
    const [error, setError] = useState(null);
    const token = localStorage.getItem("token");
    const nav = useNavigate();
    useEffect(() => {
        
        const fetchUserData = async () => { 
            
            if (!token) {
                setError("Usuário não autenticado.");
                return;
            }
            try {
                const response = await getUserProfile(token)
            } catch (error) {
                setError("Erro Carregamento do jogador")
            }

            };

        fetchUserData();
    }, []);
    /*
    if(error=="Erro Carregamento do jogador"){
        print('Redirecionado')
        nav('/')
    }
    */
    const handleDelete = async (event) => {
        event.preventDefault()
        try{
            const response = await removeJogador(token,tableId,user.email)
            if(response.status===200){
                alert(`Jogador `+String(response.data.name)+"removido")
            }else{
                alert("Erro ao remover Jogador")
            }
            
        }catch{

        }

    }
    return(
        <div style={styles.container}>
            <Token cor={getCorJogador(user.id)}></Token>
            <div style={styles.containerInfo}>
                <h2 style={styles.txtInfo}>{user.name.split(" ")[0]}</h2>
                {isMestre && 
                    (<button onClick={handleDelete} style={styles.deleteButton}>X</button>
                )}
            </div>

        </div>
    )
}

const styles = {
    container:{
        display:'flex',
        gap:'10px',
        backgroundColor:'white',
        borderRadius:'10px',
        border:'solid',
        borderColor:'black',
        padding:'10px'
    },
    deleteButton:{
        background: "red",
        color: "white",
        border: "none",
        padding: "5px 10px",
        cursor: "pointer",
    },
    containerInfo:{
        display:'flex',
        alignItems: 'center',
        gap:'5px'
    },
    txtInfo:{
        color:'black'
    }
}

export default JogadorBox