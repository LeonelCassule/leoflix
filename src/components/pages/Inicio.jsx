import {useEffect, useState} from 'react'
import { getPokemon } from '../../PokemonServices';

import Container from "../layout/Container"
import PokemonCard from "../filmes/PokemonCard"

import style from "./Inicio.module.css"


function Inicio(){

    const[pokemons, setPokemons] = useState([])

    useEffect(()=> {
        getPokemon()
        .then(data => console.log(data))
        .catch(err => console.error(err));

    }, [])


    return (
        <div>
         <div>
           <h1>Filme em Destaque</h1>
           <a href="#">Filmes Novos</a>
         </div>

         <Container>
           {pokemons.length > 0 &&  pokemons.map((pokemon) =>
           <p>pokemon.name</p>
          )
           }
         
          </Container>
       </div>
)
        
       
      
}

export default Inicio