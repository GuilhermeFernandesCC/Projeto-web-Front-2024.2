import React, { useEffect } from "react";

export default function Cadastro() {
    useEffect(() => {
        document.title = "Cadastro"; // Altera o título da página
        }, []);

    return (
        <div>
            <h1>Página de Cadastro</h1>
        </div>  
    );
}