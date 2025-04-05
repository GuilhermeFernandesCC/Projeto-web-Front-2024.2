import React, { useEffect,useState } from "react";
import { getJogadores } from "../services/api";
import JogadorBox from "./JogadorBox";
import { useCoresJogadores } from "../services/coresjogadores"
const JogadoresBox = ({table}) =>{
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [jogadores,setJogadores] = useState([]);
    const { getCorJogador } = useCoresJogadores()
    useEffect(() => {
        const token = localStorage.getItem("token");
        const fetchUserData = async () => { 
            if (!token) {
                setError("Usuário não autenticado.");
                return;
            }

            try {
                const response = await getJogadores(token,table.id)
                if (Array.isArray(response.data)){
                    setJogadores(response.data)}
            } catch (error) {
                setError("Erro de conexão com o servidor.");
                //window.location.href = "/"
            }

            };

            fetchUserData();
        }, []);
    return (
        <div id="JogadoresBox" style={styles.container}>
            {jogadores.map((jogador)=>(<JogadorBox key={jogador.id} cor={getCorJogador(jogador.id)} user={jogador}></JogadorBox>))}
        </div>
    )
}

const styles = {
    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position:'fixed',
        top: "10%",
        left: "20px",
        gap:'10px'

    },
}

export default JogadoresBox