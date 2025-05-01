"use client";

import { useEffect, useState } from "react";

export default function TypingEffect() {
  const [text, setText] = useState("");
  const fullText = " Bendize, ó minha alma, ao Senhor, e tudo o que há em mim bendiga o seu santo nome."; 
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText((prevText) => prevText + fullText[index]);
      index++;
      if (index === fullText.length) {
        index = 0; // Reinicia o índice para começar o texto de novo
        setText(""); // Limpa o texto atual para reiniciar o efeito
      }
    }, 100); // Intervalo entre cada letra (100ms)

    return () => clearInterval(interval); // Limpa o intervalo quando o componente for desmontado
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.text}>{text}</h1>
    </div>
  );
}

const styles = {
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: "1rem",
    fontFamily: "'Courier New', Courier, monospace", // Fonte tipo máquina de escrever
    whiteSpace: "nowrap", // Evita que o texto quebre para a linha seguinte
    borderRight: "3px solid pink", // Linha simulando cursor de digitação
    paddingRight: "5px", // Espaço entre o texto e o cursor
  },
};
