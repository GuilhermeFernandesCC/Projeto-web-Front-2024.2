import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import FundoMesa from "../components/FundoMesa"
import JogadoresBox from "../components/JogadoresBox";
import ReturnConfigBox from "../components/ReturnConfigBox";
export default function Mesa() {
    const location = useLocation();
    const table = location.state?.table; // Dados passados
    const isMestre = location.state?.isMestre;
    useEffect(() => {
        document.title = "Mesa"; // Altera o título da página
      }, []);
      
    return (
        <div style={{display:'flex'}}>
            <FundoMesa></FundoMesa>
            <JogadoresBox table={table} isMestre={isMestre}></JogadoresBox>
            <ReturnConfigBox isMestre={isMestre} table={table} ></ReturnConfigBox>
            
        </div>  
    );
}
