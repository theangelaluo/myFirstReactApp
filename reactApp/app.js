import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = [{taskText: "clean room", completed: false}, {taskText: "laundry", completed: true}, {taskText: "grocery shopping", completed: false}];

class TodoApp extends React.Component {
  render() {
    return(
      <div>
        <InputLine />
        <TodoList />
      </div>
    );
  }
}

class InputLine extends React.Component {
  render() {
    return (
      <div style={{paddingLeft: "30px", paddingTop: "10px"}}>
          <input type="text"/>
          <input type="submit"/>
      </div>
    );
  }
}


class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  checkCompleted(completed) {

  }

  render() {
    if (this.props.completed) {
      return (<strike><li><button>X</button> {this.props.task}</li></strike>);
    } else {
      return (<li><button>X</button> {this.props.task}</li>);
    }
  }
}


class TodoList extends React.Component {

  render() {
    return (
      <ul>
        {dummyData.map((item)=> <Todo task={item.taskText} completed={item.completed}/>)}
      </ul>
    );
  }
}


ReactDOM.render(<TodoApp />, document.getElementById('root'));
