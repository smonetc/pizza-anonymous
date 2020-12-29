import React from 'react'

const YPContext = React.createContext({
  category: [],
  yourpizza: [],
  addYourPizza: () => {},
})

export default YPContext
