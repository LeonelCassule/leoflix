import styles from "./PokemonCard.module.css"


function PokemonCard({name, image}){
    return (
        <div className={styles.project_card}>
            <img src={image} alt={name}/>
                <h4>{name}</h4>
        </div>
    )
}

export default PokemonCard