import React from 'react'
import Home from './components/home'
import Register from './components/register'
import WaitingResponse from './components/waiting_response'
import WhoAreWe from './components/who_are_we'
import Login from './components/login'
import Main from './components/main'
import RequestForm from './components/request_form'
import { Switch, Route } from 'react-router-dom'
import './global.css'
import './App.css'

function App() {
  return (
    <div id="app">
      <Switch>
        <Route path="/home" exact component={Home}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/waiting_response" exat component={WaitingResponse}/>
        <Route path="/who_are_we" exact component={WhoAreWe}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/main" exact component={Main}/>
        <Route path="/request_form" exact component={RequestForm}/>
      </Switch>
    </div>
  )
}

export default App