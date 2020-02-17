// react
import React from 'react'
// imgs
import logoShawee from './../../img/logo-shawee.svg'
import logoLod from './../../img/logo-lod.svg'
import logoStone from './../../img/logo-stone.svg'
// css
import './style.css'

// component function
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

// exporting...
export default Footer