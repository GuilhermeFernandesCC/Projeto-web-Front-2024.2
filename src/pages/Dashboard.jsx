import React, { useEffect ,useState} from "react";
import Cabecalho from "../components/Cabecalho";
import PerfilMin from "../components/PerfilMin";


export default function Login() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        document.title = "Dashboard"; // Altera o título da página

        const fetchUserData = async () => {
        const token = localStorage.getItem("token");
    
        if (!token) {
            setError("Usuário não autenticado.");
            setLoading(false);
            window.location.href = "/"
            return;
        }
    
        try {
            const response = await fetch("https://sua-api.com/user", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`, 
            },
            });
    
            if (response.ok) {
            const data = await response.json();
            setUser(data);
            } else {
            setError("Erro ao carregar perfil.");
            }
        } catch (error) {
            setError("Erro de conexão com o servidor.");
        } finally {
            setLoading(false);
        }
        };
    
        fetchUserData();
    }, []);
    
    if (loading) return <p>Carregando...</p>;
    if (error) return <p>{error}</p>;
      
    
    return (
        <div>
            <Cabecalho></Cabecalho>
        </div>
    );
}