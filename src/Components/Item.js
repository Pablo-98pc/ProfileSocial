import React from 'react';

class Item extends React.Component{
  constructor(props){
    super(props);
    this.state= {...this.props.info}
    this.editCell= this.editCell.bind(this); 
    this.handleChange= this.handleChange.bind(this);
  }
  editCell() {
    this.setState(prevState => (
      { isNowEditable: !prevState.isNowEditable }));
  }
  handleChange(e){
    this.setState({value : e.target.value})
    this.props.onChange(e.target.value)
  }
  
  render(){
    let option= undefined
    if(this.state.isEditable){
      if(this.state.isNowEditable){
        option=   <div className="subindex"><p>{this.state.title}</p>{this.state.value}<button onClick={this.editCell}><img src="https://cdn-icons-png.flaticon.com/128/1159/1159633.png" alt="editar" width="20px" height="20px"/></button></div>
      }else{
        option =  <div className="subindex"><p>{this.state.title}</p><input id={this.state.input} onChange={this.handleChange} value={this.state.value} type="text"/><button onClick={this.editCell}>Guardar</button></div>
      }
    }else{
      option =  <div className="subindex"><p>{this.state.title}</p>{this.state.value}</div>
    }
    return option
  }
}
export default Item