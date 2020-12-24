import React from 'react'
import '../Style/Create.css'



class Create extends React.Component{
   render(){
      return(
         <div >
            <h4>Share Page: </h4>
            <div className="shareform">
               <form> 
                  <label>Crust:</label>
                  <select 
                  name="crust_name" 
                  id="crust_name"
                  required>
                     <option value=''>Choose One</option>
                     {this.props.crust.map(c => 
                        <option key={c.id} value={c.type}>
                           {c.type}
                        </option>
                     )}
                  </select>
                  <br />
                  <label>Sauce:</label>
                  <select 
                  name="sauce_name" 
                  id="sauce_name"
                  required>
                     <option value=''>Choose One</option>
                     {this.props.sauce.map(s => 
                        <option key={s.id} value={s.type}>
                           {s.type}
                        </option>
                     )}
                  </select>
                  <br />
                  <label>Cheese:</label>
                  <select 
                  name="cheese_name" 
                  id="cheese_name"
                  required>
                     <option value=''>Choose One</option>
                     {this.props.cheese.map(ch => 
                        <option key={ch.id} value={ch.type}>
                           {ch.type}
                        </option>
                     )}
                  </select>
                  <br />
                  <label>Meats:</label>
                     <div className="meat">
                        {this.props.meat.map((m) => (
                           <div key={m.id}>
                              <input
                              type="checkbox"
                              name="meat_name"
                              key={m.id}
                              value={m.type}
                              />
                              <label>{m.type}</label>
                           </div>
                        ))}
                     </div>
                     <br />
                     <label>Toppings:</label>
                  <div>
                        {this.props.toppings.map((t) => (
                           <div key={t.id} className="top">
                              <input
                              type="checkbox"
                              name="toppings_name"
                              key={t.id}
                              value={t.type}
                              />
                              <label>{t.type}</label>
                           </div>
                        ))}
                     </div>
                     <button type="submit">Submit</button>
               </form>
            </div>
         </div>
      )
   }
}

export default Create