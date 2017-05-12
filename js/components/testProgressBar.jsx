import React from 'react';
import ReactDOM from 'react-dom';

export default class TestProgressBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tds: [<td/>,<td/>,<td/>,<td/>,<td/>,<td/>,<td/>,<td/>,<td/>,<td/>,
                    <td/>,<td/>,<td/>,<td/>,<td/>,<td/>,<td/>,<td/>,<td/>,<td/>,
                    <td/>,<td/>,<td/>,<td/>,<td/>,<td/>,<td/>,<td/>,<td/>,<td/>,
                    <td/>,<td/>,<td/>,<td/>,<td/>,<td/>]
        }
    }
    refreshStatus = (nextProps) => {
        let tdArray = [];
        for (let i=0; i<this.props.db.length; i++) {
            if (i < nextProps.currentQuestion) {
                tdArray.push( <td className="filled"></td> )
            }
            else (
                tdArray.push( <td></td> )
            )
        };
        this.setState({tds: tdArray})
    }
    componentWillReceiveProps(nextProps) {
        this.refreshStatus(nextProps);
    }
    // componentDidMount() {
    //     this.refreshStatus();
    // }
    render() {
        return  <table className="progress-bar">
                    <tbody>
                        <tr>
                            {this.state.tds}
                        </tr>
                    </tbody>
                </table>;
    }
};
