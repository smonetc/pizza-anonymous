import React from 'react' 
import { Link } from 'react-router-dom'
import '../Style/LandingPage.css'
import pizza from './pizza.png'

class LandingPage extends React.Component{
   render(){
      return(
         <div className="landingpage">
            <div className="landingpage-image">
               <img src={pizza} alt="placeholderimage" />
            </div>
            <div className="about">
               <h2>Welcome to Pizza Anonymous</h2>
               <p>So everyone loves pizza, right? I mean if they’re cool then they do. 
                  Here on Pizza-AAA we’re here to share our pizza creations with the 
                  pizza loving world! We’ll provide the crust, cheese and sauce options and 
                  you provide the different meats and toppings that you order on your pizza. 
                  Sweet or savory we’re here for ALL the pizza vibezzz. </p>
               <div className="landingpage-buttons">
                  <button className="btn"><a href="https://pizza-anonymous-pgwl39m3c.vercel.app/create" className="links">Create Pizza</a></button> 
               </div>
            </div>
         </div>
      )
   }
}
   

 export default LandingPage