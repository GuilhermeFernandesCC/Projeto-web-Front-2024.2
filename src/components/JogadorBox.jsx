import React from "react";
import Token from "./Token"
import { useParams, useLocation } from "react-router-dom";

const JogadorBox = ({user,cor}) => {
    
    return(
        <div style={styles.container}>
            <Token cor={cor}></Token>
            <div style={styles.containerInfo}>
                <h2 style={styles.txtInfo}>{user.name.split(" ")[0]}</h2>
            </div>
        </div>
    )
}

const styles = {
    container:{
        display:'flex',
        gap:'10px',
        backgroundColor:'white',
        borderRadius:'10px',
        border:'solid',
        borderColor:'black',
        padding:'10px'
    },
    containerInfo:{
        display:'flex'
    },
    txtInfo:{
        color:'black'
    }
}

export default JogadorBox