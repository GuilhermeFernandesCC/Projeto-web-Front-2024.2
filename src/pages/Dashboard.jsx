import React, { useEffect ,useState} from "react";
import Cabecalho from "../components/Cabecalho";
import PerfilMin from "../components/PerfilMin";


export default function Login() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        document.title = "Dashboard"; // Altera o título da página
    })
    return (
        <div>
            <Cabecalho></Cabecalho>
            
        </div>
    );
}