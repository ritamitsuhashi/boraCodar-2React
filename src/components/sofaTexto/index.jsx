import styles from "./SofaTexto.module.css";

export default function SofaTexto() {
    return(
        <>
        <div className={styles.boxTexto}>
        <p>CÓD</p>
        <h1>Sofá Margot II - Rosé</h1>
        <h2>R$ 4.000</h2>
        </div>

        <button className={styles.botaoComprar}>Adicionar à cesta</button>
        </>
    )
}