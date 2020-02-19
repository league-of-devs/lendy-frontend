// react
import React from 'react'

// router
import { Link } from 'react-router-dom'

// css
import './style.css'

function MainHeader(){
    return(
        <header id="main-header">
            <Link to="/offer_form"><button className="offer-button">Investir</button></Link>
            <Link to="/search_offers_form"><button className="request-button">Solicitar</button></Link>
        </header>
    )
}

export default MainHeader