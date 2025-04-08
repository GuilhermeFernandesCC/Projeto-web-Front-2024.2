import React, {useState, useEffect} from "react";
import { getTablesAsMaster, getTablesAsPlayer } from "../services/api";
import MesaBox from "./MesaBox";

const MesasParticipante = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [mesasJogador,setMesasJogador] = useState([])
    const [mesasMestre,setMesasMestre] = useState([])
    const [loading, setLoading] = useState(true);
    const [tableLoad, setTableLoad] = useState(true);
    useEffect(() => {
        const fetchUserData = async () => {
        const token = localStorage.getItem("token");
        
        if (!token) {
            setError("Usuário não autenticado.");
            setLoading(false);
            return;
        }

        try {
            const response = await getUserProfile(token)
            setUser(response.data)
        } catch (error) {
            setError("Erro de conexão com o servidor.");
            //window.location.href = "/"
        } finally {
            setLoading(false);
        }

        try{
            const response1 = await getTablesAsMaster(token)
            if (Array.isArray(response1.data)) {
                //console.log(response1.data)
                setMesasMestre(response1.data)
                //console.log(mesasMestre)
            }
            const response2 = await getTablesAsPlayer(token)
            if (Array.isArray(response2.data)){
                //console.log(response2.data)
                setMesasJogador(response2.data)
                //console.log(mesasJogador)
            }
        } catch (erro) {
            console.log('ERROR')
            setError("Erro de conexão com o servidor (tables)");
        } finally {
            setTableLoad(false);
        }

        };

        fetchUserData();
    }, []);

    return (
        <div style={styles.container}>
            {mesasMestre.length > 0 && 
                (mesasMestre.map((mesa)=>(<MesaBox table={mesa} key={mesa.id} isMestre={true}></MesaBox>)))
            }
            {mesasJogador.length > 0  && 
                (mesasJogador.map((mesa)=>(<MesaBox table={mesa} key={mesa.id} ></MesaBox>)))
            }
        </div>
    );
}
const styles = {
    container:{
        margin:'30px',
        marginTop:'150px',
        backgroundColor: "white", // Cor do fundo
        padding: '20px',
        display:'flex',
        width:'90%',
        height:'90%',
        borderRadius:"10px",
        justifyContent:'flex-start',
        alignItems:'flex-start',
        alignContent:'flex-start',
        flexWrap:'wrap',
        gap:'5px',

        zIndex:1,
    }
}

export default MesasParticipante