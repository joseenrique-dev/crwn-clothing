import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './shop/shop.component'
import Header from './components/header/header-component'

const HatsPage = () => (
  <div>
    <h1> Hats PAGE</h1>
  </div>
)

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App
