import React from 'react'
import '../Style/Pizzas.css'

class Pizzas extends React.Component {
   render(){
      const {id,crust,sauce,cheese,meat,toppings} = this.props
      return(
         <>
            <h4>Pizza Choice: {id} </h4>
            <p>Crust: {crust}</p>
            <p>Sauce: {sauce}</p>
            <p>Cheese: {cheese} </p>
            <p>Meat(s): {meat}</p>
            <p>Topping(s): {toppings}</p>
         </>
      )
   }
}

export default Pizzas