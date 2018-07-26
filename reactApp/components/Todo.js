import React from 'react';
import ReactDOM from 'react-dom';


class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.completed) {
      return (<strike><li><button>X</button> {this.props.task}</li></strike>);
    } else {
      return (<li><button>X</button> {this.props.task}</li>);
    }
  }
}

export default Todo;
