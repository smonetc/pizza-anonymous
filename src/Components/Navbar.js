import React from 'react'
import {Link} from 'react-router-dom'
import '../Style/Navbar.css'

class Navbar extends React.Component{

   state = { clicked: false }

   handleClick = () => {
       this.setState({ clicked: !this.state.clicked })
   }

   render(){
      return(
         <nav className="NavbarItems">
         <h1 className="navbar-logo"><Link to="/" className="logo">Pizza-AAA</Link></h1>
         <div className="menu-icon" onClick={this.handleClick}>
             <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
         </div>
         <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
            <li> <Link className="nav-links" to='/create'>Create <i className="fas fa-pencil-alt"></i></Link></li>
            <li> <Link className="nav-links" to='/pizza-creation'>View <i className="fas fa-pizza-slice"></i></Link></li>
            <li> <a href='https://github.com/smonetc/pizza-anonymous' target='_blank' rel="noreferrer" className="nav-links"><i className="fab fa-github-alt" /></a></li>
            <li><a href='https://twitter.com/helloitsmonet' target='_blank' className='twitter nav-links' rel='noreferrer'><i className="fab fa-twitter" /></a></li>
         </ul>
     </nav>
      )
   }
}

export default Navbar
