import PokemonCard from "../filmes/PokemonCard"
import styles from "./Buscar.module.css"

function Buscar(){
    return (
    <div className={styles.buscar_container}>
        <h1>Busca o seu <span>Carro</span></h1>
        <PokemonCard />
    </div>
)
}

export default Buscar