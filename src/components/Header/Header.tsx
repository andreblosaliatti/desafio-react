import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

import './style.css'

export default function Header() {
    return (
        <nav className="nav">
            <div className="nav-container">
                <div className="menu-container">
                    <NavLink to='/' end className={({isActive}) => isActive ? "nav-link nav-link-active" : "nav-link"}>
                    Início
                    </NavLink>
                    <NavLink to='/products' end className={({isActive}) => isActive ? "nav-link nav-link-active" : "nav-link"}>
                     Produtos
                    </NavLink>
                    <NavLink to='/about' end className={({isActive}) => isActive ? "nav-link nav-link-active" : "nav-link"}>
                    Sobre nós
                    </NavLink>
                </div>
                <a href="/">
                    <FontAwesomeIcon icon={faHouse} className="icon"/>
                </a>
            </div>
        </nav>
    )
}