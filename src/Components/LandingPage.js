import React from 'react' 
import { Link } from 'react-router-dom'
import '../Style/LandingPage.css'
import pizza from './pizza.png'

class LandingPage extends React.Component{
   render(){
      return(
         <div className="landingpage">
            <div>
               <h2>Welcome to Pizza Anonymous</h2>
               <p>Here you can share your favorite pizza varations and see other creations from fellow pizza lovers!</p>
            </div>
            <div className="landingpage-image">
               <img src={pizza} alt="placeholderimage" />
            </div>
            <div className="landingpage-buttons">
               <button><Link to="/create" className="links">Create Your Pizza</Link></button> 
               <button><Link to="/pizza-creation" className="links">View Creations</Link></button>
            </div>
         </div>
      )
   }
}
   

 export default LandingPage