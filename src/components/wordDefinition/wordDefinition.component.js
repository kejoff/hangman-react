import React, { Component } from 'react';
import './wordDefinition.component.css'

class WordDefinition extends Component {

  constructor(props){
    super(props);
    this.state = {
      wordChosen: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) { 
    this.setState({
      value: event.target.value
    });  
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form id="formMakeGuess" onSubmit={this.handleSubmit}>
        <h2>Choose a word to make guess</h2>
        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter a word" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default WordDefinition;