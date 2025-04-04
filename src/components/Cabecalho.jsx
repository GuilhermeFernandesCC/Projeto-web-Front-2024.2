import React, {useState,useEffect} from "react";
import PerfilMin from "./PerfilMin";
import BotaoSalvar from "./BotaoSalvar";
import PerfilModal from "./Perfil";
import NewTableModal from "./NewTableModal";
import { getUserProfile } from "../services/api";
const Cabecalho = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isOpenPerfil, setIsOpenPerfil] = useState(false);
    const [isOpenNewTable,setIsOpenNewTable] = useState(false);
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
        };

        fetchUserData();
    }, []);
    return (
        <header style={styles.header}>
        {!loading && user ? <PerfilMin user={user} /> : <p>Carregando...</p>}
        <div style={styles.nav}>
            <BotaoSalvar onClick={() => setIsOpenPerfil(true)} text='Perfil'> </BotaoSalvar>
            <BotaoSalvar text='Criar Mesa' onClick={()=>setIsOpenNewTable(true)}> </BotaoSalvar>
            <BotaoSalvar text='Sair' onClick={()=>window.location.href = "/"}> </BotaoSalvar>
        </div>
        {isOpenPerfil && (
            <PerfilModal user={user} onClose={() => setIsOpenPerfil(false)}></PerfilModal>
        )}
        {isOpenNewTable && (
            <NewTableModal onClose={()=>setIsOpenNewTable(false)}></NewTableModal>
        )}
        </header>
    );
    };
  
const styles = {
header: {
    position: "fixed", // Fixa no topo
    top: 0,
    left: 0,
    width: "100%", // Ocupa toda a largura da tela
    backgroundColor: "#034B97", // Cor do fundo
    color: "#fff", // Cor do texto
    padding: "15px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    zIndex: 1000, // Mantém o cabeçalho sobre outros elementos
},
title: {
    margin: 0,
    fontSize: "24px",
},
nav: {
    display: "flex",
    gap: "15px",
},
link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
},
};
  
export default Cabecalho;