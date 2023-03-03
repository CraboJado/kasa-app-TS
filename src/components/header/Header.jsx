import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/LOGO.png'
import  style from './index.module.css'

export default function Header() {
  return (
    <header className={style.Header}>
        <div className={style.Header__logoWrap}>
            <img className={style.Header__logo} src={logo} alt="kasa logo"/>
        </div>
        <nav className={style.Header__nav}>
            <NavLink to = "/" className={({ isActive} ) => isActive? style.activeLink : ''}>Accueil</NavLink>
            <NavLink to = "./about" className={( { isActive} ) => isActive? style.activeLink : ''}>A Props</NavLink>
        </nav>
    </header>
  )
}
