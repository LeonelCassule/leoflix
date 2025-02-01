import styles from "./Inicio.module.css"
import imagem from "../../img/film-action.jpg"
import Container from "../layout/Container"
import Pokemon from "../pages/Pokemon"
import styles from "../pages/Pokemon.module.css"

import PokemonCard from "../filmes/PokemonCard"
import {useEffect, useState} from 'react'
import { getCars } from '../../CarServices'

import styles from "./CarsForm.module.css"



function Inicio(){

    const[cars, setCars] = useState([])

    useEffect(()=> {
        getCars()
        .then(data => setCars(data))
        .catch(err => console.error(err));

    }, [])


    return (
        <div className={styles.pokemon_container}>
         <div className={styles.title_container}>
           <h1>Filme em Destaque</h1>
           <a href="#">Filmes Novos</a>
         </div>

         <Container customClass ="start">
            {cars.length > 0 && cars.map((car)=>
           < PokemonCard 
           id = {cars.id}
           name = {cars.name}
           budget = {cars.budget}
           key =  {cars.id}
            />)}
         </Container>
       </div>
)
        
       
      
}

export default Inicio