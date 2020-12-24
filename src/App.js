import React from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import LandingPage from './Components/LandingPage';
import PizzaCreation from './Components/PizzaCreation';
import Create from './Components/Create';
import STORE from './STORE';
// import Footer from './Components/Footer'

class App extends React.Component{
  constructor(props){
    super(props)
       this.state = {
       crust:STORE.crust,
       sauce:STORE.sauce,
       cheese:STORE.cheese,
       meat:STORE.meat,
       toppings:STORE.toppings,
       yourpizza: STORE.yourpizza
    }
 }

  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <main>
            <Switch>
              <Route path="/" exact={true} component={() => <LandingPage />}/>
              <Route path="/pizza-creation"  component={() => <PizzaCreation  yourpizza={this.state.yourpizza}/>}/>
              <Route path="/create"  component={() => <Create crust={this.state.crust} sauce={this.state.sauce} cheese={this.state.cheese} meat={this.state.meat} toppings={this.state.toppings} />}/>
            </Switch>
          </main>
          {/* <Footer>
            <Footer />
          </Footer> */}
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
