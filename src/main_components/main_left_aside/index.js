// react
import React from 'react'

// router
import { Link, useHistory } from 'react-router-dom'

// other components
import LendyLogo from '../../components/lendy_logo'

// css
import './style.css'

function MainLeftAside(){
    const history = useHistory()

    function handleUserLogout(){
        localStorage.removeItem('@lendy/auth_token')
        history.push('/home')
    }

    return(
        <aside id="main-left-aside">
            <div className="logo">
                <LendyLogo></LendyLogo>
            </div>
            <div className="button-group">
                <Link to="/my_offers_feed"><button>Minhas ofertas</button></Link>
                <Link to="/my_request_feed"><button>Minha solicitação</button></Link>
                <Link to="/my_offers_feed"><button>Editar dados</button></Link>
                <Link to="/my_offers_feed"><button>Carteira virtual</button></Link>
                <button onClick={handleUserLogout}>Sair</button>
            </div>
        </aside>
    )
}

export default MainLeftAside