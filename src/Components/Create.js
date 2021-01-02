import React from 'react'
import '../Style/Create.css'
import STORE from '../STORE'
import YPContext from '../YPContext'
import config from '../config'
import ValidationError from '../ValidationError'
import YourPizzaError from '../YourPizzaError'

class Create extends React.Component{
   static defaultProps = {
      history: {
          push: () => { },
      }   
  }

  constructor(props){
     super(props)
     this.state ={
        meats: {
           value: '',
           touched:false
        },
        toppings:{
           value: '',
           touched: false
        },
        username:{
           value:'',
           touched:false
        },
        crust:STORE.crust,
        cheese:STORE.cheese,
        sauce: STORE.sauce,
        errorMessage:null
     }
  }

  static contextType = YPContext

  updateUsername(username){
     this.setState({
        username: {value:username, touched:true}
     })
  }

   updateToppings(toppings){
      this.setState({
         toppings: {value:toppings, touched:true}
      })
   }

   updateMeats(meats){
      this.setState({
         meats: {value:meats, touched:true}
      })
   }

   handleSubmit = (e) => {
      e.preventDefault()
      const {crust,cheese,sauce,meats,toppings,category_id,username} = e.target
      if(this.isValid()){
         const getPizza = {
            crust: crust.value,
            cheese: cheese.value,
            sauce: sauce.value,
            meats: meats.value,
            toppings: toppings.value,
            category_id: category_id.value,
            username: username.value
         }
         fetch(`${config.API_ENDPOINT}/api/yourpizza`,{
            method: 'POST',
            body: JSON.stringify(getPizza),
            headers:{
               'Accept':'application/json',
               'content-type':'application/json'
            }
         })
         .then(pizzaRes => {
            if(!pizzaRes.ok){
               return pizzaRes.json().then(e => Promise.reject(e))
            }
            return pizzaRes.json()
         })
         .then(pizza => {
            crust.value = ''
            cheese.value = ''
            sauce.value = ''
            meats.value = ''
            toppings.value = ''
            category_id.value = ''
            username.value = ''
            this.context.addYourPizza(pizza)
            window.location = '/pizza-creation'
         })
         .catch(error => {
            console.log(error)
         })
      }
   }

   isValid = () => {
      const meats = this.state.meats.value.trim()
      const toppings = this.state.toppings.value.trim()
      const username = this.state.username.value.trim()
      const provideInfo = {meats,toppings,username}
      for( const [key,value] of Object.entries(provideInfo)){
         if(value.length <= 3){
            this.setState({errorMessage: `Please provide more info for ${key}`})
            return false
         }
      }
      return true
   }

  render(){
     const {crust,cheese,sauce} = this.state
     const {category = []} = this.context
     return(
         <YourPizzaError>
            <h2 className="share">SHARE THE WAY YOU LIKE YOUR PIZZA!</h2>
            <div className='post-form'>
               <form onSubmit={this.handleSubmit}>  
                  <label htmlFor='category_id'> * Category</label>
                     <select
                     name='category_id'
                     id="category_id"
                     required
                     >
                     <option value=''>Choose One</option>
                     {category.map(ca => 
                        <option key={ca.id} 
                        value={ca.id}
                        >
                        {ca.content}
                        </option>
                        )}
                     </select>
                  <br />
                  <label htmlFor='crust'> * Crust</label> 
                  <select
                  name='crust'
                  id="crust"
                  required
                  >
                  <option value=''>Choose A Crust</option>
                  {crust.map(c => 
                     <option key={c.id} 
                     value={c.type}
                     >
                     {c.type}
                     </option>
                     )}
                  </select>
                  <br />
                  <label htmlFor='cheese'> * Cheese</label>
                  <select
                  name='cheese'
                  id="cheese"
                  required
                  >
                  <option value=''>Choose A Cheese</option>
                  {cheese.map(ch => 
                     <option key={ch.id} 
                     value={ch.type}
                     >
                     {ch.type}
                     </option>
                     )}
                  </select>
                  <br />
                  <label htmlFor='sauce'> * Sauce</label> 
                  <select
                  name='sauce'
                  id="sauce"
                  required
                  >
                  <option value=''>Choose A Sauce</option>
                  {sauce.map(s => 
                     <option key={s.id} 
                     value={s.type}
                     >
                     {s.type}
                     </option>
                     )}
                  </select>
                  <br />
                  <label htmlFor='meats'> * Meats </label>
                  <br />
                  <textarea 
                  name='meats'
                  id='meats'
                  placeholder='Use comas between meat choices or put none'
                  onChange={e => this.updateMeats(e.target.value)}
                  required
                  />
                  <br />
                  <label htmlFor='toppings'> * Toppings </label>
                  <br />
                  <textarea 
                  name='toppings'
                  id='toppings'
                  placeholder='Use comas between topping choices or put none'
                  onChange={e => this.updateToppings(e.target.value)}
                  required
                  />
                  <br />
                  <label> * Your Name</label>
                  <br />
                  <input 
                  type='text'
                  name='username'
                  id='username'
                  placeholder='Your Name'
                  onChange={e => this.updateUsername(e.target.value)}
                  required
                  />
                  <br />
                  {this.state.errorMessage && <ValidationError message={this.state.errorMessage}/>}
                  <button type='submit' className="create-btn">
                     Submit
                  </button>
               </form>
            </div>
         </YourPizzaError>
     )
  }
}

export default Create


