import  axios from "axios"

export async function getPokemon(){
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    return response.data.results;
}