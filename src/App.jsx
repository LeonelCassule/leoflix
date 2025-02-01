import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Layout
import Navbar from "./components/layout/Navbar"
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
//Pages
import Inicio from "./components/pages/Inicio"
import Buscar from "./components/pages/Buscar"
import Genero from "./components/pages/Genero"


function App() {

  return (
    <Router>

      <Navbar/>
        
      <Container customClass= "min-height">
      <Routes>
        <Route path = "/" element = {< Inicio />}/>
        <Route path = "/buscar" element = {< Buscar />}/>
        <Route path = "/genero" element = {< Genero />}/>
      </Routes>
     </Container>
 
    <Footer/>

    </Router>
  );
}

export default App;
