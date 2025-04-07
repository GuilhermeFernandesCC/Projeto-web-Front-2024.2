import React, { useEffect,useState } from "react";
import ConfigPanel from "./ConfigPanel";

const ReturnConfigBox = ({user,table,isMestre}) =>{
    const [configOpen,setConfigOpen] = useState(false)
    const handleConfig = () =>{
        setConfigOpen(true)
    }
    return(
        <div style={styles.container}>
            <button onClick={()=>window.location.href = "/dashboard"} id='ReturnButton' style={styles.botao} >
                <img src="src/assets/return.svg" style={styles.fig} alt="" />
            </button>
            {isMestre && (<button onClick={()=>handleConfig()} id='ConfigButton' style={styles.botao} >
                <img src="src/assets/config.svg" style={styles.fig} alt="" />
            </button>)}
            {configOpen && (
                <ConfigPanel table={table} onClose={()=> setConfigOpen(false)}></ConfigPanel>
            )}
        </div>
    )
}

const styles ={
    container:{
        display:'flex',
        gap:'10px',
        borderRadius:'20px',
        backgroudColor:'#034B97',
        width:'120px',
        height:'80px',
        justifyContent:'center',
        alignItems:'center',
        top:'10%',
        position:'fixed',
        right:'20px',


    },
    botao:{
        borderRadius:'20px',
        backgroudColor:'white'
    },
    fig:{
        width:'40px',
        height:'40px',
    }
}

export default ReturnConfigBox