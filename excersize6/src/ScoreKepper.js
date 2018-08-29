import React, {Component} from 'react'

class ScoreKepper extends Component{
    constructor(){
        super();
        this.state ={
            score: 0
        }

    }
    clickedButton = () => {
        this.setState({score: this.state.score +=1})
    }

    render(){
        return(
            <div>
            <button onClick={this.clickedButton}>{this.state.score}</button>
        </div>
    )
    }
}
export default ScoreKepper;


