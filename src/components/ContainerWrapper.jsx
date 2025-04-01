import React from "react";
import Caixa from  "../components/CaixaLoginCad"
import InputField from "./InputField";
import TitleContainer from "./TituloLoginCad";
import BotaoSalvar from "./BotaoSalvar";
import TextLink from "./TextLink";

const ContainerLogin = ({ imageSrc, children }) => {
  return (
    <div style={styles.wrapper}>
      <img src={imageSrc} alt="Imagem" style={styles.image} />
      <Caixa>
        <TitleContainer title="Lunar Maps"></TitleContainer>
        <InputField label='Email'></InputField>
        <InputField label='Senha'></InputField>
        <TextLink text='Não tem uma conta?' linkText='Registre-se'></TextLink>
        <BotaoSalvar text='Entrar'></BotaoSalvar>
      </Caixa>
    </div>
  );
};

const ContainerCadastro = ({ imageSrc, children }) => {
    return (
      <div style={styles.wrapper}>
        <img src={imageSrc} alt="Imagem" style={styles.image} />
        <Caixa>
          <TitleContainer title="Lunar Maps Cadastro"></TitleContainer>
          <InputField label='Nome'></InputField>
          <InputField label='Email'></InputField>
          <InputField label='Senha'></InputField>
          <TextLink text='Não tem uma conta?' linkText='Registre-se'></TextLink>
          <BotaoSalvar text='Entrar'></BotaoSalvar>
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
