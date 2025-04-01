import React, { useEffect } from "react";
import {ContainerLogin,ContainerCadastro} from "../components/ContainerWrapper";


export default function Login() {
    useEffect(() => {
        document.title = "Login"; // Altera o título da página
        }, [])
    
    return (
        <div>
            <ContainerLogin imageSrc='src/assets/LuaAzulSemFundo.png'></ContainerLogin>
        </div>
    );
}