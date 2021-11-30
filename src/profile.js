import React from 'react';
import ReactDOM from 'react-dom';

const user ={
    pic: pic,
    name: "Linda Williams",
    username:"llwil",
    email: "linda.w@webbs.com",
    phone:"+1-555-245-2013",
    devices: "Mobile",
    location: "San Francisco, USA",
    social: "Facebook",
    spent: "$2,500",
    studentID:"",
    password:"",
    gender:"",
    language:"",
    privacy:"",
    globalNot:""
  }
class ExtensiveUser extends React.Component{
    constructor(props){
      super(props)
      this.state = {...this.state.user}
    }
    render(){
      return <>
      <div className="extended-info">
          <div className="top-bar">
              <img src={this.state.pic} alt="user profile"/>
              <div><a href="">{this.state.name}</a></div>
              <div>{this.state.username}</div>
          </div>
          <main>
              <div className="basic-info">Basic information
                  <div className="name">{this.state.name}</div>
                  <div className="email">{this.state.email}</div>
                  <div className="studentID"><a href="">Add Student ID</a></div>
                  <div className="password"><a href="">Change password</a></div>
              </div>
              <div className="add-info">Additional information
                  <div className="gender"><a href="">Add gender</a></div>
              </div>
              <div className="sys-info">System settings
                  <div className="language">{this.state.language}</div>
                  <div className="privacy">{this.state.privacy}</div>
                  <div className="global-settings">{this.state.globalNot}</div>
              </div>
          </main>
      </div>
      </>
    }
  }

  ReactDOM.render(
    <ExtensiveUser/>,
    document.getElementById('root')
  );
  