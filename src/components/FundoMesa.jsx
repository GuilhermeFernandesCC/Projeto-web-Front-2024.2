const FundoMesa = () => {
    
    
    return (
        <div style={styles.container}>
            <img style={styles.img} src="src/assets/fundo1.jpeg" alt="Fundo" />
        </div>
    )
    

}

const styles = {
    img:{
        maxWidth: "100%",
        maxHeight: "100%",
    },
    container:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px", // afastamento fixo das bordas
        height: "100vh", // ocupa a altura toda da tela
        boxSizing: "border-box", // garante que o padding conta no tamanho
        zIndex:0
    }
}

export default FundoMesa