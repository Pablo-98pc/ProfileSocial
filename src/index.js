import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css";
import Contact from './Components/Contact.js';
import ExtensiveUser from './Components/ExtensiveUser.js';
import { firstblock,secondBlock,thirdBlock,user} from './Components/variables.js';


class Html extends  React.Component{
constructor(props){
  super(props)
  this.state= {...this.props.user,...this.props.info,visibility : true}
  this.display = this.display.bind(this)
}
display(){
  this.setState(prevState => (
    { visibility: !prevState.visibility }))
}
render() {
  return <div className='main'>
    
  {this.state.visibility ? 
  <div>< div className="avatar" onClick = {this.display}>
  <Contact user={user}/>
  </div> </div> :  <div className="extensiveProfile"><input type="button" value="X" onClick={this.display}/>
  <ExtensiveUser user = {user} firstBlock={firstblock} secondBlock= {secondBlock} thirdBlock = {thirdBlock}/>
  </div>
 }
    
  </div>
}
}

ReactDOM.render(
  <Html/>,
  document.getElementById('root')
);

/* en la <Contact/>  user= {user} de esta manera se puede pasar multiples 
propiedades al state, de esta manera en el construct podemos utilizar
this.state*/

/* se utiliza el spread operator porque esta afuera el objeto con sus propiedades
o se pueden declarar las propiedades directamente en el this.state = {las propiedades deseadas}
 */