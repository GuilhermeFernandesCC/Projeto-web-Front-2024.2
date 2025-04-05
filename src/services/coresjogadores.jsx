import React, { createContext, useContext, useState } from "react";

const CoresJogadoresContext = createContext();

export const CoresJogadoresProvider = ({ children }) => {
  const [coresJogadores, setCoresJogadores] = useState({});

  const getCorJogador = (jogadorId) => {
    if (!coresJogadores[jogadorId]) {
      setCoresJogadores((prev) => ({
        ...prev,
        [jogadorId]: `hsl(${Math.random() * 360}, 70%, 50%)`,
      }));
    }
    return coresJogadores[jogadorId] || "gray"; // Cor padrão até ser gerada
  };

  return (
    <CoresJogadoresContext.Provider value={{ getCorJogador }}>
      {children}
    </CoresJogadoresContext.Provider>
  );
};

export const useCoresJogadores = () => useContext(CoresJogadoresContext);
