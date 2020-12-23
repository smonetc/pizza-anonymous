import React from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter,Route,Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar />
          <main>
            {/* <Switch>
              <Route path="/" exact="true" component={() => <LandingPage />}/>
              <Route path="/pizza-creation"  component={() => <PizzaCreation />}/>
              <Route path="/share"  component={() => <Share />}/>
            </Switch> */}
          </main>
        </div>
    </BrowserRouter>
  )
}

export default App;
