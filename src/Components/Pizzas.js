import React from 'react'
import '../Style/Pizzas.css'
import YPContext from '../YPContext'

class Pizzas extends React.Component {
   static defaultProps = {
      match: {
        params: {}
      }
  }

  static contextType = YPContext

   render(){
      const {id,crust,sauce,cheese,meat,toppings,category,username} = this.props
      return(
         <>
            <h4>Pizza Choice: {id} </h4>
            <p>Category: {category}</p>
            <p>Crust: {crust}</p>
            <p>Sauce: {sauce}</p>
            <p>Cheese: {cheese} </p>
            <p>Meat(s): {meat}</p>
            <p>Topping(s): {toppings}</p>
            <p>Username: {username}</p>
         </>
      )
   }
}

export default Pizzas