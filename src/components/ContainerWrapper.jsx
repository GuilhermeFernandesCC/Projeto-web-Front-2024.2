import React, {useState} from "react";
import Caixa from  "../components/CaixaLoginCad"
import InputField from "./InputField";
import TitleContainer from "./TituloLoginCad";
import BotaoSalvar from "./BotaoSalvar";
import TextLink from "./TextLink";

const ContainerLogin = ({ imageSrc, children }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");  

    const handleLogin = async (event) => {
        event.preventDefault(); // Impede o recarregamento da página
    
        // Dados do formulário
        const formData = {
          name,
          email,
        };
    
        try {
          // Enviando os dados para a API usando `fetch`
          const response = await fetch("https://sua-api.com/endpoint", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
    
          // Verifica se a requisição foi bem-sucedida
          if (response.ok) {
            const data = await response.json();
            alert("Formulário enviado com sucesso!");
          } else {
            alert("Erro ao enviar o formulário.");
          }
        } catch (error) {
          console.error("Erro de rede:", error);
          alert("Erro de rede ao enviar o formulário.");
        }
    };

    return (
        <div style={styles.wrapper}>
        <img src={imageSrc} alt="Imagem" style={styles.image} />
        <Caixa>
            <form onSubmit={handleLogin}>
                <TitleContainer title="Lunar Maps"></TitleContainer>
                <InputField onChange={(e) => setName(e.target.value)} label='Email'></InputField>
                <InputField onChange={(e) => setEmail(e.target.value)} label='Senha'></InputField>
                <TextLink text='Não tem uma conta?' linkText='Registre-se'></TextLink>
                <BotaoSalvar type='submit' text='Entrar'></BotaoSalvar>
            </form>
        </Caixa>
        </div>
    );
};

const ContainerCadastro = ({ imageSrc, children }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const handleCadastro= async (event) => {
        event.preventDefault(); // Impede o recarregamento da página
    
        // Dados do formulário
        const formData = {
          name,
          email,
          senha
        };
    
        try {
          // Enviando os dados para a API usando `fetch`
          const response = await fetch("https://sua-api.com/endpoint", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
    
          // Verifica se a requisição foi bem-sucedida
          if (response.ok) {
            const data = await response.json();
            alert("Formulário enviado com sucesso!");
          } else {
            alert("Erro ao enviar o formulário.");
          }
        } catch (error) {
          console.error("Erro de rede:", error);
          alert("Erro de rede ao enviar o formulário.");
        }
    };


    return (
      <div style={styles.wrapper}>
        <img src={imageSrc} alt="Imagem" style={styles.image} />
        <Caixa>
            <form onSubmit={handleCadastro}>
                <TitleContainer title="Lunar Maps Cadastro"></TitleContainer>
                <InputField onChange={(e) => setName(e.target.value)} label='Nome'></InputField>
                <InputField onChange={(e) => setEmail(e.target.value)} label='Email'></InputField>
                <InputField onChange={(e) => setSenha(e.target.value)} htmlFor='senha' label='Senha' type='password'></InputField>
                <TextLink text='Já possui uma conta?' linkText='Faça Login'></TextLink>
                <BotaoSalvar text='Entrar'></BotaoSalvar>
            </form>
        </Caixa>
      </div>
    );
};

const styles = {
    wrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100vw",
      height: "100vh",
      gap:"100px"
    },
    image: {
      width: "45vw", // Define a largura da imagem
      height: "45vw", // Mantém a proporção
      objectFit: "cover", // Garante que a imagem cubra bem o espaço
    },
};

export {ContainerLogin,ContainerCadastro};
