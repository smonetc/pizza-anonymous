import React from 'react'
import {Link} from 'react-router-dom'


class Navbar extends React.Component{
   render(){
      return(
         <div className="navbar">
           <div className="logo-nav">
              <div className="logo-container">
               <h1><Link to="/">Pizza Street</Link></h1>
              </div>
              <ul>
                 <li>
                    <Link to="/share">Share Your Fave Pizza</Link>
                 </li>
                 <li>
                    <Link to="/pizza-creation">Share Your Fave Pizza</Link>
                 </li>
              </ul>
           </div>
         </div>
      )
   }
}

export default Navbar