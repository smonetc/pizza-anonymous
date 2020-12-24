import React from 'react'
import '../Style/PizzaCreation.css'
import Pizzas from './Pizzas'

class PizzaCreation extends React.Component{

   render(){
      const {yourpizza} = this.props
      return(
         <div>
            <h4>Pizza Creations Page: </h4>
            <div  className="pizza-container">
               <ul>
                  {yourpizza.map(pizza =>
                     <li key={pizza.id} className="pizzaboxes">
                        <Pizzas 
                           id={pizza.id}
                           crust={pizza.crust}
                           sauce={pizza.sauce}
                           cheese={pizza.cheese}
                           meat={pizza.meat}
                           toppings={pizza.toppings}
                        />
                     </li>
                  )}
               </ul>
            </div>
         </div>
      )
   }
}

export default PizzaCreation