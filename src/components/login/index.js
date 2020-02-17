import React from 'react'
import LendyLogo from './../lendy_logo'
import { Link } from 'react-router-dom'
import './style.css'

function Login(){
    return (
        <div id="login">
            <div className="content">
                <LendyLogo></LendyLogo>
                <form>
                    <input name="cpf" id="cpf" placeholder="CPF" type="number" required></input>
                    <input name="password" id="password" placeholder="senha" type="password" required></input>
                    <Link to="/main"><button type="submit">Entrar</button></Link>
                </form>
                <div className="goto-login">
                    <span>Ainda não é cadastrado?</span>
                </div>
                <div className="goto-login">
                    <Link to="/register"><a>Cadastre-se aqui!</a></Link>
                </div>
            </div>
        </div>
    )
}

export default Login