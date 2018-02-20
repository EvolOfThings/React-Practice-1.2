import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./ValidationComponent";
import CharComponent from "./CharComponent";

class App extends Component {
  state = {
    text: '',
    length: 0,
    convertText: []
  };

  textLength = (event) => {
    const inputText = event.target.value;

    this.setState({
      length: inputText.length,
      text: inputText
    });
  };

  convertString = () => {
    const textToConvert = this.state.text;

  // call split to convert string to array 
    const stringToArr = textToConvert.split('');

    const listItems = stringToArr.map((string) =>
      <li>{string}</li>
    );

    // convert array to string
    // let arrToString = stringToArr.join('');

    this.setState({
      convertText: [listItems]
    });

  }

  render() {
    return (
      <div className="App">
        <h2>React-Practice-2</h2>
        <ol>
          <li>
            Render a list of CharComponents where each CharComponent receives a
            different letter of the entered text (in the initial input field) as
            a prop.
          </li>
          <li>
            When you click a CharComponent, it should be removed from the
            entered text.
          </li>
        </ol>

        <input
          type="text"
          placeholder="Enter Text here"
          onChange={this.textLength}
        />
        <p>length = {this.state.length}</p>
        <ValidationComponent length={this.state.length} />
        <CharComponent arry={this.state.convertText} />
      </div>
    );
  }
}

export default App;
