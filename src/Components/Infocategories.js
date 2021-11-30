import React from 'react';
import Item from './Item.js';


class InfoCategories extends React.Component {
  constructor(props){
    super(props);
    this.state = {...this.props.block}
    this.changeUserParent= this.changeUserParent.bind(this)
  }
  changeUserParent(value,items){
    this.setState(() => {this.state.items[0].value = value});
    this.props.onChange()
  }

  render () {
    let individual = this.state.items.map((item)=><Item info={item} onChange={this.changeUserParent}/>) 
    return <div className="container">{this.state.titleContainer}{individual}</div>
  }
}
export default InfoCategories