import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        {this.props.todos.map((item, index)=> <Todo toggle={()=>this.props.toggle(index)} xClick={()=>this.props.todoXClick(index)} task={item.taskText} completed={item.completed}/>)}
      </ul>
    );
  }
}

export default TodoList;
