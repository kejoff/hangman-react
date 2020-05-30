import React from 'react';

class ConfirmWordToGuess extends React.Component{
    state = {
        confirmedWord: ''
    }

    onClickChange = e => {
        e.preventDefault();
        this.props.onClick(this.state.confirmedWord)
    }

    onAccepted = e => {
        this.setState(() => ({ confirmedWord: "accepted" }));
    }

    onRefused = e => {
        this.setState(() => ({confirmedWord: "refused"}))
    }

    render(){
        return(
            <div>
                <p>The word you want to be guessed is:</p>
                <h3>{this.props.word}</h3>
                <p>Would you like to confirm the word?</p>
                <div>
                    <button
                        onClick={this.onAccepted}
                    >
                        Yes
                    </button>
                    <button
                        onClick={this.onRefused}
                    >
                        No
                    </button>
                </div>
                {/* {this.state.confirmedWord} */}
            </div>
        )
    }
}

export default ConfirmWordToGuess;