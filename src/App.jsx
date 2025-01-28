import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Inicio from "./components/pages/Inicio"
import Buscar from "./components/pages/Buscar"
import Genero from "./components/pages/Genero"



import Navbar from "./components/layout/Navbar"
import Container from "./components/layout/Container";



function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>

      <Navbar/>

      <Container customClass= "min-height">
      <Routes>
        <Route path="/" element= {< Inicio />}/>
        <Route path="/buscar" element= {< Buscar />}/>
        <Route path="/genero" element= {< Genero />}/>
        </Routes>
      </Container>
      <p>Por hoje é tudo</p>
     <p>Footer</p>

    </Router>
  )
}

export default App
