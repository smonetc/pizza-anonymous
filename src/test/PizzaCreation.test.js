import React from 'react'
import ReactDOM from 'react-dom'
import PizzaCreation from '../Components/PizzaCreation'


it('renders without crashing', () => {
   const div = document.createElement('div')
   ReactDOM.render(<PizzaCreation />, div)
   ReactDOM.unmountComponentAtNode(div)
 })