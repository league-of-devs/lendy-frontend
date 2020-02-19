// react
import React from 'react'

// router
import { Switch, Route } from 'react-router-dom'

// other components
import Home from './pages/home'
import Register from './pages/register'
import WhoAreWe from './pages/who_are_we'
import Login from './pages/login'
import OfferForm from './main_pages/offer_form'
import SearchOffersForm from './main_pages/search_offers_form'
import UserDataForm from './main_pages/user_data_form'
import MyOffersFeed from './main_pages/my_offers_feed'
import MyRequestFeed from './main_pages/my_request_feed'

// css
import './global.css'
import './App.css'

function App() {
  return (
    <div id="app">
      <Switch>
            {localStorage.getItem('@lendy/auth_token') ? (
              <>
                <Route path="/offer_form" exact component={OfferForm}/>
                <Route path="/search_offers_form" exact component={SearchOffersForm}/>
                <Route path="/user_data_form" exact component={UserDataForm}/>
                <Route path="/my_offers_feed" exact component={MyOffersFeed}/>
                <Route path="/my_request_feed" exact component={MyRequestFeed}/>
              </>
            ) : (
              <>
                <Route path="/home" exact component={Home}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/who_are_we" exact component={WhoAreWe}/>
                <Route path="/login" exact component={Login}/>
              </>
            )}
      </Switch>
    </div>
  )
}

export default App