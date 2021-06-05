import React from 'react'
import logoM from '../assets/logos/monisu-gris.png'

export const Navbar = () => {

    return (
        <>
            <nav>

                <div className="nav-wrapper grey lighten-3">
                <a href="#!" className="brand-logo navbar__container"><img src={logoM} alt="Monisu icon"/></a>
                <a href="#!" data-target="mobile-demo" className="sidenav-trigger" ><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down navbar__container">
                    <li><a href="#!" className=" red-text text-accent-4">Estilos</a></li>
                    <li><a href="#!" className=" red-text text-accent-4">Mapa</a></li>
                    <li><a href="#!" className=" red-text text-accent-4">Productos</a></li>
                    <li><a href="#!" className=" red-text text-accent-4">Nosotros</a></li>
                    <li><a href="#!" className=" red-text text-accent-4">Contacto</a></li>
                </ul>
                </div>
                
            </nav>

            <ul className="sidenav navbar__container grey lighten-3 " id="mobile-demo">
                <li><a href="#!" className=" red-text text-accent-4">Estilos</a></li>
                <li><a href="#!" className=" red-text text-accent-4">Mapa</a></li>
                <li><a href="#!" className=" red-text text-accent-4">Productos</a></li>
                <li><a href="#!" className=" red-text text-accent-4">Nosotros</a></li>
                <li><a href="#!" className=" red-text text-accent-4">Contacto</a></li>
            </ul>
            <hr/>
        </>
    )
}
