import React from 'react';
import ReactDOM from 'react-dom';
import TestProgressBar from './testProgressBar.jsx';
import TestQestion from './testQestion.jsx';
import TestNav from './testNav.jsx';

export default class Test extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentQuestion: 0,
            isPrevClicked: false
        }
    }
    handleNextChange = currentQuestion => {
        this.setState({currentQuestion});
        console.log(currentQuestion);
        let newNext = Number(currentQuestion) + 1;
        this.setState({nextQuestion: newNext});
        console.log(newNext);
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
