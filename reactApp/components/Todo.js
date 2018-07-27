import React from 'react';
import ReactDOM from 'react-dom';


class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.completed) {
      return (<strike><li onClick={()=>this.props.toggle()}><button onClick={()=>this.props.xClick()}>X</button> {this.props.task}</li></strike>);
    } else {
      return (<li onClick={()=>this.props.toggle()}><button onClick={()=>this.props.xClick()}>X</button> {this.props.task}</li>);
    }
  }
}

export default Todo;
