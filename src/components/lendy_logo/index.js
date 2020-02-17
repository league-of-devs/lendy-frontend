import React from 'react'
import './style.css'
import logoLendy from './../../img/logo-lendy.svg'

function LendyLogo(){
    return(
        <div id="lendy-logo">
            <img src={logoLendy} alt="Lendy"/>
        </div>
    )
}

export default LendyLogo