import React from 'react';

import InputWordToGuess from './InputWordToGuess'
import ConfirmWordToGuess from './ConfirmWordToGuess'

class App extends React.Component{
    state = {
        word: '',
        confirmedWord: ''
    }

    onWordSubmit = wordToGuess =>{
        this.setState(() => ({word: wordToGuess}))
    }

    onConfirmedClick = confirmedWord => {
        this.setState(() => ({ confirmedWord: confirmedWord }))
    }

    render(){
        return(
            <div>
                {this.state.confirmedWord}
                {this.state.word === '' && this.state.confirmedWord === '' ? (
                    <InputWordToGuess onSubmit={this.onWordSubmit}/>) 
                : this.state.word !== '' && this.state.confirmedWord === '' ? (
                    <ConfirmWordToGuess word={this.state.word} confirmedWord={this.state.confirmedWord} onClick={this.onConfirmedClick}/>)
                : this.state.word !== '' && this.state.confirmedWord === 'refused' ? (
                    <InputWordToGuess onSubmit={this.onWordSubmit}/>) 
                : this.state.word !== '' && this.state.confirmedWord === 'accepted'(
                    <h2>It's time to guess the word!</h2>)
                }
            </div>
        )
    }
}

export default App;