import styles from "./BotaoGirar.module.css";

export default function BotaoGirar() {
  return (
    <>
      <button class={styles.botaoGif} onclick="BotaoGirar()">
        <img src="./assets/botao360.svg" alt="Imagem 360" id="botaoGirar" />
      </button>{" "}
    </>
  );
}
