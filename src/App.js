import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./ValidationComponent";
import CharComponent from "./CharComponent";

class App extends Component {
  state = {
    inputText: '',
      };

  textChange = (event) => {
    this.setState({
      inputText: event.target.value
    });
  }
  deleteCharHandler = (index) => {
    const text = this.state.inputText.split('');
    text.splice(index, 1);
    const newText = text.join('');
    this.setState({ inputText: newText});
  }

  render() {
    const characterList = this.state.inputText.split('').map((ch,index) => {
      return <CharComponent 
      character={ch} 
      key={index}
      clicked={() => this.deleteCharHandler(index)} />;
    });

    return (
      <div className="App">
        <h2>React-Practice-2</h2>
        <input
          type="text"
          placeholder="Enter Text here"
          onChange={this.textChange}
          value={this.state.inputText}
        />
        <p>{this.state.inputText} <br/> length = {this.state.inputText.length}</p>
        <ValidationComponent length={this.state.inputText.length} />
        {characterList}
      </div>
    );
  }
}

export default App;
