import React from 'react';
import InfoCategories from './Infocategories.js';
import {firstblock,secondBlock,thirdBlock,user } from './variables.js';

 class ExtensiveUser extends React.Component{
    constructor(props){
      super(props)
      this.state = {...this.props.user, ...this.props.firstBlock}
      this.changeUserParentParent = this.changeUserParentParent.bind(this)
    }
    changeUserParentParent(value){
      this.setState(() => {this.state.items.value = value})
    }
    render(){
      return <><div className="extended-info">
          <div className="top-bar">
              <img src={this.state.pic} alt="user profile" className="profile"/>
              <div><a href="">{this.state.name}</a></div>
              <div className="username">{this.state.username}</div>
          </div>
          <main className="main">
            <InfoCategories block = {firstblock} onChange={this.changeUserParentParent}/>
            <InfoCategories block = {secondBlock} onChange={this.changeUserParentParent}/>
            <InfoCategories block = {thirdBlock} onChange={this.changeUserParentParent}/>
          </main>
      </div>
      </>
    }
  }
export default ExtensiveUser