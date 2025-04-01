import React, { useEffect } from "react";

export default function Mesa() {
    useEffect(() => {
        document.title = "Mesa"; // Altera o título da página
      }, []);
      
    return (
        <div>
            <h1>Página de Mesa</h1>
        </div>  
    );
}