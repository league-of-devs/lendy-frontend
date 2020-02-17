import React from 'react'
import './style.css'
import logoShawee from './../../img/logo-shawee.svg'
import logoLod from './../../img/logo-lod.svg'
import logoStone from './../../img/logo-stone.svg'

function Footer(){
    return(
        <footer id="footer">
            <div className="logo-group">
            <img src={logoShawee} alt="shawee"/>
            <img src={logoLod} alt="lod"/>
            <img src={logoStone} alt="stone"/>
            </div>
        </footer>
    )
}

export default Footer