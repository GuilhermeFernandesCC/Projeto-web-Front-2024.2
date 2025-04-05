
const ReturnVoltarBox = ({user,table}) =>{

    return(
        <div style={styles.container}>
            <button onClick={()=>window.location.href = "/dashboard"} id='Return' style={styles.botao} >
                <img src="src/assets/return.svg" style={styles.fig} alt="" />
            </button>
            <button id='Config' style={styles.botao} >
                <img src="src/assets/config.svg" style={styles.fig} alt="" />
            </button>
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

export default ReturnVoltarBox