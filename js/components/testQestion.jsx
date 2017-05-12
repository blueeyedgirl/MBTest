import React from 'react';
import ReactDOM from 'react-dom';


{/* <TestQestion
    db={this.props.db}
    currentQuestion={this.state.currentQuestion}
/> */}



export default class TestQestion extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            e: 0,
            s: 0,
            t: 0,
            j: 0,
        }
    }

    render() {
        return  <div className="qa">
                    <h1> {this.props.db[this.props.currentQuestion].questionPL}: </h1>
                    <div className="answer"> {this.props.db[this.props.currentQuestion].answers[0].answerPL} </div>
                    <div className="answer"> {this.props.db[this.props.currentQuestion].answers[1].answerPL} </div>
                </div>
    }
};
