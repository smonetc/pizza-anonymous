import React from 'react'
import ReactDOM from 'react-dom'
import Pizzas from '../Components/Pizzas'


it('renders without crashing', () => {
   const div = document.createElement('div')
   ReactDOM.render(<Pizzas />, div)
   ReactDOM.unmountComponentAtNode(div)
 })