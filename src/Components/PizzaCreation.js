import React from 'react'
import '../Style/PizzaCreation.css'
import Pizzas from './Pizzas'
import YPContext from '../YPContext'

class PizzaCreation extends React.Component{

   static defaultProps = {
      match: {
        params: {}
      }
   }

  
   static contextType = YPContext

   render(){
      let yourpizza = this.context.yourpizza
      return(
         <div>
            <h2 className="heading">Pizza Creations Page: </h2>
            <div  className="pizza-container">
                  {yourpizza.map(pizza =>
                     <div key={pizza.id} className="pizzaboxes">
                        <Pizzas 
                           id={pizza.id}
                           category={pizza.content}
                           crust={pizza.crust}
                           sauce={pizza.sauce}
                           cheese={pizza.cheese}
                           meat={pizza.meats}
                           toppings={pizza.toppings}
                           username={pizza.username}
                        />
                     </div>
                  )}
            </div>
         </div>
      )
   }
}

export default PizzaCreation