import React from 'react';
import ReactDOM from 'react-dom';

export default class TestQestion extends React.Component {

    render() {
        return  <div>
                    <h1> {this.props.db[0].questionPL} </h1>
                    <div className="answer"> {this.props.db[0].answers[0].answerPL} </div>
                    <div className="answer"> {this.props.db[0].answers[1].answerPL} </div>
                </div>
    }
};
