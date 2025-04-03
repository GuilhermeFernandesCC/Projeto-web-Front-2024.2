import BotaoSalvar from "./BotaoSalvar"

const MesaBox = ({table,isMestre=false}) =>{

    return (
        <div id="mesa" style={styles.container}>
            <img onClick={''} style={styles.img} src = {isMestre ? "src/assets/mapa1.png":"src/assets/mapa2.png"} alt="Imagem mesa" />
            <div>
                <h2 style={styles.tableName}>{table.name}</h2>
            </div>
        </div>
    )
}

const styles = {
    container:{
        width:'260px',
        display:'flex',
        border:'solid',
        borderColor:'black',
        borderRadius:'10px',
        zIndex:2,

    },
    img:{
        width:'100px',
        height:'100px',
        borderRadius:'10px'
    },
    tableName:{
        color:'black',

    }
}

export default MesaBox