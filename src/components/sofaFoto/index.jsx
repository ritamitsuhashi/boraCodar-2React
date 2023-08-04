import styles from './SofaFoto.module.css';

export default function SofaFoto() {
    return(
     //<img className={styles.foto} style={{ backgroundImage: `url('./assets/card-sofa-${imagem}.png')` }} />
     <img src="assets/card-sofa-estatico.png" alt="Imagem Sofá Margot II Rosé" className={styles.foto} />
    )
}