import React, { Component } from 'react';

import MainHeader from './components/header/header.component.js'
import './App.css';
import WordDefinition from './components/wordDefinition/wordDefinition.component.js';

class App extends Component {
  render() {
    return (
      <div>
        <MainHeader/>
        <WordDefinition/>
      </div>
    );
  }
}

export default App;
