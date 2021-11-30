import React from 'react';



  
  class Contact extends React.Component{
    constructor(props){
      super(props)
      this.state= {...this.props.user,visible:true} //esta pidiendo el user del declarado en linea 5
    }
   
    
    render(){
      return <div  className="user-card">
          <div>
            <img src={this.state.pic} alt="user-profile" className="profile"/>
            <div className= "user-container">
                <h3 className= "name">{this.state.name}</h3>
                <p className= "email">{this.state.email}</p>
                <p className= "phone">{this.state.phone}</p>
            </div>
            <div className="user-info">
            <div className= "info-container">
            <div className= "devices">Devices Used- {this.state.devices}</div>
            <div className= "location">Location- {this.state.location}</div>
            <div className= "social">{this.state.social} profile</div>
            </div>
            <div className="spent">Total Amount Spent- {this.state.spent}</div>
            </div>
      </div>
    </div>
  }
}
  export default Contact