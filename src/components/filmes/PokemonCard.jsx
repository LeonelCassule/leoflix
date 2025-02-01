import styles from "./PokemonCard.module.css"
import {BsPencil, BsFillTrashfill} from 'react-icons/bs'

function PokemonCard({id, name, budget}){
    return (
        <div className={styles.Pokemon_card}>
            <h4>{name}</h4>
            <p>
                <span>Tipo:</span>{name}
            </p>

            <div>
                <p>imagem do pokemon</p>
            </div>
        </div>
    )
}

export default Pokemon