import React from 'react';
import ReactDOM from 'react-dom';

export default class TestNav extends React.Component {
    handleNextNavCh = event => {
        if (typeof this.props.onNextChange === "function") {
            this.props.onNextChange(event.target.value)
        }
    }
    render() {
        return  <div className="testNav">
                    <button className="button prev">Wróc</button>
                    <button className="button next" onClick={this.handleNextNavCh} value={Number(this.props.currentQuestion)+1}> Dalej </button>
                </div>;
    }
};
