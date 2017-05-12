import React from 'react';
import ReactDOM from 'react-dom';

export default class MainNav extends React.Component {
    handleStart = event => {
        if (typeof this.props.onStartChange === "function") {
            this.props.onStartChange(event.target)
        }
    }
    render() {
        return  <div>
                    <button className="button start" onClick={this.handleStart}>Zacznij test</button>
                    {/* <br/><br/> */}
                    {/* <div className="button more">Więcej o teście</div>
                    <div className="button types">Poznaj 16 typów osobowości</div> */}
                </div>;
    }
};
