import styles from "./PokemonCard.module.css"
import { Link } from "react-router-dom"


import {BsPencil, BsFillTrashFill} from "react-icons/bs"

function PokemonCard({name}){
    return (
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span> Kz <p>Olá Leonel</p>
            </p>
            <p className = {styles.category_text}>
                <span></span> <p>olá Leonel</p>
               
            </p>

            <div className={styles.project_card_actions}>
                <Link to="/">
                    <BsPencil /> Editar
                </Link>
               <button>
                <BsFillTrashFill /> Remover
               </button>
            </div>
        </div>
    )
}

export default PokemonCard