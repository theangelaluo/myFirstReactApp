import React from 'react';
import ReactDOM from 'react-dom';
import InputLine from './InputLine';
import TodoList from './TodoList';

const dummyData = [{taskText: "clean room", completed: false}, {taskText: "laundry", completed: true}, {taskText: "grocery shopping", completed: false}];

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    this.setState({
      todos: dummyData
    })
  }

  render() {
    return(
      <div>
        <InputLine />
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default TodoApp;
