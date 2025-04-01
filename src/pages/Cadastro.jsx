import React, { useEffect } from "react";
import {ContainerLogin,ContainerCadastro} from "../components/ContainerWrapper";
export default function Cadastro() {
    useEffect(() => {
        document.title = "Cadastro"; // Altera o título da página
        }, []);

    return (
        <div>
            <ContainerCadastro imageSrc='src/assets/LuaAzulSemFundo.png'/>
        </div>  
    );
}