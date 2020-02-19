// react
import React from 'react'

// img
import logoLendy from './../../img/logo-lendy.svg'

// css
import './style.css'

// component function
function LendyLogo(){
    return(
        <div id="lendy-logo">
            <img src={logoLendy} alt="Lendy"/>
        </div>
    )
}

// exporting...
export default LendyLogo