import React, { useEffect ,useState} from "react";
import Cabecalho from "../components/Cabecalho";
import MesasParticipante from "../components/MesasParticipante";


export default function Dashboard() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        document.title = "Dashboard"; // Altera o título da página
    })
    return (
        <div id="dashboardRoot" style={styles.dashboard}>
            <Cabecalho></Cabecalho>
            <MesasParticipante></MesasParticipante>
        </div>
    );
}

const styles={
    dashboard:{
        width:'100%',
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'
    }
}