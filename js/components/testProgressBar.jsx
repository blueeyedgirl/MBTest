import React from 'react';
import ReactDOM from 'react-dom';

export default class TestProgressBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            trs: null
        }
    }
    refreshStatus = (p) => {
        let trArray = [];
        for (let i=0; i<p.db.length; i++) {
            if (i < p.currentQuestion) {
                trArray.push( <td className="filled"></td> )
            }
            else (
                trArray.push( <td></td> )
            )
        };
        this.setState({trs: trArray})
    }
    componentWillReceiveProps(nextProps) {
        this.refreshStatus(nextProps);
    }
    render() {
        return  <table className="progress-bar">
                    <tbody>
                        <tr>
                            {this.state.trs}
                        </tr>
                    </tbody>
                </table>;
    }
};
