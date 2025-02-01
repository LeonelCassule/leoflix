import CarsForm from "../filmes/CarsForm"
import styles from "./Buscar.module.css"

function Buscar(){
    return (
    <div className={styles.buscar_container}>
        <h1>Busca o seu <span>Carro</span></h1>
        <CarsForm />
    </div>
)
}

export default Buscar