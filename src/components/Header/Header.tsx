import { NavLink } from "react-router-dom";
import './style.css'

export default function Header() {
    return (
        <nav className="nav">
            <div className="nav-container">
                <NavLink to='/' end className={({isActive}) => isActive ? "nav-link nav-link-active" : "nav-link"}>
                Início
                </NavLink>
                <NavLink to='/producs' end className={({isActive}) => isActive ? "nav-link nav-link-active" : "nav-link"}>
                 Produtos
                </NavLink>
                <NavLink to='/about' end className={({isActive}) => isActive ? "nav-link nav-link-active" : "nav-link"}>
                Sobre nós
                </NavLink>
            </div>
        </nav>
    )
}