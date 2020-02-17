import React from 'react'
import LendyLogo from './../lendy_logo'
import Footer from './../footer'
import { Link } from 'react-router-dom'
import './style.css'

function Home() {
  return (
    <div id="home">
      <div className="content">
        <LendyLogo></LendyLogo>
        <header>
          <p>Mais que um empréstimo, um investimento em sonhos e necessidades</p>
        </header>
        <main>
          <div className="button-group">
            <Link to="/login"><button>Acesse</button></Link>
            <Link to="/"><button>Conheça</button></Link>
            <Link to="/who_are_we"><button>Quem somos</button></Link>
          </div>
        </main>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Home