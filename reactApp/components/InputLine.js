import React from 'react';
import ReactDOM from 'react-dom';

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


export default InputLine;
