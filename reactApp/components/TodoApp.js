import React from 'react';
import ReactDOM from 'react-dom';
import InputLine from './InputLine';
import TodoList from './TodoList';

let dummyData = [{taskText: "clean room", completed: false}, {taskText: "laundry", completed: true}, {taskText: "grocery shopping", completed: false}];

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  addTodo(task) {
    var newTask = {taskText: task, completed: false};
    dummyData.push(newTask);
    this.setState({
      todos: dummyData
    })
  }

  removeTodo(index) {
    dummyData.splice(index, 1);
    this.setState({
      todos: dummyData
    })
  }

  toggleTodo(index) {
    if (this.state.todos[index].completed === false) {
      this.state.todos[index].completed = true;
    } else {
      this.state.todos[index].completed = false;
    }
    this.setState({
      todos: dummyData
    })
  }

  componentDidMount() {
    this.setState({
      todos: dummyData
    })
  }

  render() {
    return(
      <div>
        <InputLine submit={(e)=> this.addTodo(e)}/>
        <TodoList toggle={(index)=>this.toggleTodo(index)} todoXClick={(index)=>this.removeTodo(index)} todos={this.state.todos}/>
      </div>
    );
  }
}

export default TodoApp;
