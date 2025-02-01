import {useEffect, useState} from 'react'
import { getCars } from '../../CarServices'

import styles from "./CarsForm.module.css"

import Input from '../Form/Input'
import Select from '../Form/Select'

function CarsForm(){

    const[cars, setCars] = useState([])

    useEffect(()=> {
        getCars()
        .then(data => setCars(data))
        .catch(err => console.error(err));

    }, [])

    return (
    <form className={styles.form}>
        <Input 
        type = "text"
        name = "procurar"
        placeholder = "Procura o Caro pelo seu Modelo ou Marca"
         />

         <Select 
         name = "carId" 
         text="Selecione o Modelo"
         />

           
        <input className={styles.btn} type='submit' value="Procurar" />
          
    </form>
    )
}

export default CarsForm