import {useEffect, useState} from 'react'
import { getPokemon } from '../../PokemonServices';

import Container from "../layout/Container"
import PokemonCard from "../filmes/PokemonCard"

import style from "./Inicio.module.css"


function Inicio(){

    const[pokemons, setPokemons] = useState([])

    useEffect(()=> {
        getPokemon()
         .then(data => {
          console.log(data)
          setPokemons(data)}
        )
        .catch(err => console.error(err));

    }, [])


    return (
        <div>
         <div>
           <h1>Pokemons em Destaque</h1>
           <a href="#">Novos Pokemons todos os dias</a>
         </div>

         <Container>
           {pokemons.length > 0 && 
               pokemons.map((pokemon) => <PokemonCard
                ket = {pokemon.id} 
                name = {pokemon.name}
                image = {pokemon.url}/>
          )
           }
           
         
          </Container>
       </div>
)
        
       
      
}

export default Inicio