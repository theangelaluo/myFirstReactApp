import React from 'react';
import ReactDOM from 'react-dom';

class InputLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typedText: ''
    }
  }

  handleTyping(e) {
    e.preventDefault();
    this.setState({
      typedText: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state.typedText);
    this.setState({
      typedText: ''
    })
  }

  render() {
    return (
      <form /*onSubmit={(task)=>this.props.submit(task)}*/ style={{paddingLeft: "30px", paddingTop: "10px"}}>
          <input onChange={(e)=>this.handleTyping(e)} type="text" value={this.state.typedText}/>
          <input onClick={(e)=>this.handleSubmit(e)} type="submit"/>
      </form>
    );
  }
}


export default InputLine;
