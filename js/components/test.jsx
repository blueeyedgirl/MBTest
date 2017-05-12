import React from 'react';
import ReactDOM from 'react-dom';
import TestProgressBar from './testProgressBar.jsx';
import TestQestion from './testQestion.jsx';
import TestNav from './testNav.jsx';

export default class Test extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            prevQuestion: null,
            currentQuestion: 0,
            nextQuestion: 1,
            isPrevClicked: false
        }
    }
    handleNextChange = currentQuestion => {
        this.setState({currentQuestion});
        console.log("curr ", currentQuestion);
        let newNext = Number(currentQuestion) + 1;
        this.setState({nextQuestion: newNext});
        console.log("next ", newNext);
        let newPrev = Number(currentQuestion) - 1;
        this.setState({nextQuestion: newPrev});
        console.log("prev ", newPrev);
    }
    render() {
        return  <div className="test">
                    <TestProgressBar
                        db={this.props.db}
                        currentQuestion={this.state.currentQuestion}
                    />
                    <TestQestion
                        db={this.props.db}
                        currentQuestion={this.state.currentQuestion}
                    />
                    <TestNav
                        onNextChange={this.handleNextChange}
                        currentQuestion={this.state.currentQuestion}
                    />
                </div>;
    }
};
