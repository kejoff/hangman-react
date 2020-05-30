import React from 'react';

class InputWordToGuess extends React.Component{
    state = {
        wordToGuess: ""
    }

    onInputChange = e => {
        this.setState({wordToGuess: e.target.value.toUpperCase()})
    }

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.wordToGuess)
    }

    render(){
        return(
            <form
                onSubmit={this.onFormSubmit}
            >
                <label>Enter the word to be found</label>
                <input 
                    type="text"
                    value={this.state.wordToGuess}
                    onChange={this.onInputChange}
                />
            </form>
        )
    }
}

export default InputWordToGuess;