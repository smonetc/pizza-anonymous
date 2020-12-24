import React from 'react'
import {Link} from 'react-router-dom'
import '../Style/Navbar.css'

class Navbar extends React.Component{
   render(){
      return(
         <div className="navbar">
           <div className="logo-nav">
              <div className="logo-container">
               <h1><Link to="/" className="links">Pizza Anonymous</Link></h1>
              </div>
              <ul>
                 <li>
                    <Link to="/create" className="links">Create</Link>
                    <i className="fas fa-pen"></i>
                 </li>
                 <li>
                    <Link to="/pizza-creation" className="links">View</Link>
                    <i className="fas fa-pizza-slice"></i>
                 </li>
              </ul>
           </div>
         </div>
      )
   }
}

export default Navbar