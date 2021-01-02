import React from 'react'
import '../Style/Pizzas.css'


class Pizzas extends React.Component {
   static defaultProps = {
      match: {
        params: {}
      }
  }
   

   render(){
      const {id,crust,sauce,cheese,meat,toppings,category,username} = this.props
      return(
         <>
            <h4>Pizza Choice: {id} </h4>
            <p className="pizza-p">Category: {category}</p>
            <p className="pizza-p">Crust: {crust}</p>
            <p className="pizza-p">Sauce: {sauce}</p>
            <p className="pizza-p">Cheese: {cheese} </p>
            <p className="pizza-p">Meat(s): {meat}</p>
            <p className="pizza-p">Topping(s): {toppings}</p>
            <p className="pizza-p">Username: {username}</p>
         </>
      )
   }
}

export default Pizzas