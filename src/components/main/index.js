import React from 'react'
import LendyLogo from './../lendy_logo'
import Offer from './../offer'
import { Link } from 'react-router-dom'
import './style.css'


function Main(){
    return(
        <div id="main">
            <div className="content">
                <div className="logo">
                    <LendyLogo></LendyLogo>
                </div>
                <header>
                    <button>Menu</button>
                    <p>
                        Boa notícia, 'nome'
                        <br/>
                        Você possui algumas ofertas compatíveis, confira:
                    </p>
                </header>
                <main>
                    <Offer></Offer>
                </main>
                <footer>
                    <p>
                        Nenhuma dessas te agradaram?
                        <br/>
                        Você pode manter sua solicitação em espera, iremos te avisar assim que surgir alguma compatível!
                        <br/>
                        Você deseja?
                    </p>
                    <Link to="/"><button>"Sim, mande um e-mail avisando"</button></Link>
                    <Link to="/request_form"><button>"Não, irei rever minha solicitação"</button></Link>
                </footer>
            </div>
        </div>
    )
}

export default Main