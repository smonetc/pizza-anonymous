import React from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import LandingPage from './Components/LandingPage';
import PizzaCreation from './Components/PizzaCreation';
import Create from './Components/Create';
import YPContext from './YPContext';
import config from './config'


class App extends React.Component{

  constructor(props){
    super(props)
      this.state = {
      yourpizza:[],
      category:[],
    }
  }

  setYourPizza = yourpizza => {
    this.setState({
      yourpizza,
      error: null,
    })
  }
  setCategory = category => {
    this.setState({
      category,
      error: null,
    })
  }

  async componentDidMount() {
    Promise.all([
   await fetch(`${config.API_ENDPOINT}/api/yourpizza`),
   await fetch(`${config.API_ENDPOINT}/api/category`)
    ])
    .then(([yourpizzaRes, categoryRes]) => {
       if (!yourpizzaRes.ok)
          return yourpizzaRes.json().then(e => Promise.reject(e))
       if (!categoryRes.ok)
          return categoryRes.json().then(e => Promise.reject(e))
       return Promise.all([yourpizzaRes.json(), categoryRes.json()])
    })
    .then(([yourpizza,category]) => {
       this.setState({yourpizza, category})
       console.log(yourpizza)
       console.log(category)
    })
    .catch( error => {
       console.log({error})
    })
 }

 handleAddYourPizza = pizza => {
    this.setState({
      yourpizza: [...this.state.yourpizza, //overwrite the existing properties with the ones we're passing
      pizza]
    })
 }

  render(){
    const contextValue = {
      yourpizza: this.state.yourpizza,
      category: this.state.category,
      addYourPizza: this.handleAddYourPizza,
      }

    return(
      <YPContext.Provider value={contextValue}>
        <BrowserRouter>
          <div className="App">
            <nav>
              <Navbar />
            </nav>
            <main>
              <Switch>
                <Route path="/" exact={true} component={() => <LandingPage />}/>
                <Route path="/pizza-creation"  component={() => <PizzaCreation />}/>
                <Route path="/create"  component={() => <Create />}/>
              </Switch>
            </main>
          </div>
        </BrowserRouter>
      </YPContext.Provider>
    )
  }
}

export default App;
