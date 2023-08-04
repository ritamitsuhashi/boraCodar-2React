import React from "react";
import SofaTexto from "./components/sofaTexto";
import SofaFoto from "./components/sofaFoto";
import BotaoComprar from "./components/botaoComprar";
import BotaoGirar from "./components/botaoGirar";

export default function App() {
  return (
    <>
      <SofaFoto />
      <SofaTexto />
      <BotaoComprar />
      <BotaoGirar />
    </>
  );
}
