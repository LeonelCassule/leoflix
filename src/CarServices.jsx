import  axios from "axios"

export async function getCars(){
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    return response.data.results;
}