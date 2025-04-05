import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import FundoMesa from "../components/FundoMesa"
import JogadoresBox from "../components/JogadoresBox";
import ReturnVoltarBox from "../components/ReturnVoltarBox";
export default function Mesa() {
    const location = useLocation();
    const table = location.state?.table; // Dados passados
    useEffect(() => {
        document.title = "Mesa"; // Altera o título da página
      }, []);
      
    return (
        <div style={{display:'flex'}}>
            <JogadoresBox table={table}></JogadoresBox>
            <ReturnVoltarBox></ReturnVoltarBox>
            <FundoMesa></FundoMesa>
        </div>  
    );
}
