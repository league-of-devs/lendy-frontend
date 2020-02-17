// react
import React from 'react'

// router
import { Link } from 'react-router-dom'

// other components
import LendyLogo from './../lendy_logo'
import Footer from './../footer'

// css
import './style.css'

// component function
function Home() {
  return (
    <div id="home">
      <div className="logo">
          <LendyLogo></LendyLogo>
      </div>
      <div className="slogan">
        <p>Mais que um empréstimo, um investimento em sonhos e necessidades</p>
      </div>
      <div className="button-group">
        <Link to="/login"><button>Acesse</button></Link>
        <Link to="/"><button>Conheça</button></Link>
        <Link to="/who_are_we"><button>Quem somos</button></Link>
      </div>
      <Footer></Footer>
    </div>
  )
}

// exporting...
export default Home