import React, { useEffect } from "react";
import Caixa from "../components/CaixaLoginCad"
import ContainerWrapper from "../components/ContainerWrapper";


export default function Login() {
    useEffect(() => {
        document.title = "Login"; // Altera o título da página
        }, [])
    
    return (
        <div>
            <ContainerWrapper imageSrc='src/assets/LuaAzulSemFundo.png'></ContainerWrapper>
        </div>
    );
}