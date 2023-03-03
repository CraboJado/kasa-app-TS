import React from 'react';
import logo from '../../assets/images/footerLOGO.png'
import style from './index.module.css'

export default function Footer() {
  return (
    <footer className={style.Footer}>
        <div className={style.Footer__logoWrap}>
            <img className={style.Footer__logo} src={logo} alt="logo"/>
        </div>
        <p className={style.Footer__copyright}>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
