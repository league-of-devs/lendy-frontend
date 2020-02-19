// react
import React from 'react'

// other components
import LendyLogo from './../lendy_logo'

// css
import './style.css'

// component function
function Header(){
    return(
        <div id="header">
            <div className="logo">
                <LendyLogo></LendyLogo>
            </div>
            <div className="menu-button">
                <button>Menu</button>
            </div>
            <div className="space"></div>
        </div>
    )
}

// exporting
export default Header