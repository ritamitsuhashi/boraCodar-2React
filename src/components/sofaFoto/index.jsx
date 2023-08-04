import styles from './SofaFoto.module.css';
import sofaEstatico from '/assets/card-sofa-estatico.png';

export default function SofaFoto() {
    return(
     //<img className={styles.foto} style={{ backgroundImage: `url('./assets/card-sofa-${imagem}.png')` }} />
     <img src={sofaEstatico} alt="Imagem Sofá Margot II Rosé" className={styles.foto} />
    )
}