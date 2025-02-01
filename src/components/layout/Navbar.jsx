import {Link} from "react-router-dom"

import Container from "./Container"

import styles from "./Navbar.module.css"
import logo from "../../img/costs_logo.png"

function Navbar(){
    return (
    <nav className = {styles.navbar}>
      <Container>
            <Link>
                <img src ={logo} alt="leoflix"/>
            </Link>

            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/">Inicio</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/buscar">Buscar</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/genero">Gênero</Link>
                </li>
            </ul>
            </Container> 
    </nav>
    );
}

export default Navbar