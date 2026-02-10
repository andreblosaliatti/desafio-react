import { NavLink, Outlet } from 'react-router-dom'
import './style.css'

export default function products() {
    return (
        <div className="container">
            <nav className='nav-products'>
                <NavLink to='/products' end className={({isActive}) => isActive ? "prod-nav-link nav-link-active" : "prod-nav-link"}>
                Computadores
                </NavLink>
                <NavLink to='electronics' end className={({isActive}) => isActive ? "prod-nav-link nav-link-active" : "prod-nav-link"}>
                Eletrônicos
                </NavLink>
                <NavLink to='books' end className={({isActive}) => isActive ? "prod-nav-link nav-link-active" : "prod-nav-link"}>
                Livros
                </NavLink>
            </nav>
            <Outlet />
        </div>
    )
}