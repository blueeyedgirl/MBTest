import React from 'react';
import ReactDOM from 'react-dom';

export default class TestNav extends React.Component {
    render() {
        return  <div className="testNav">
                    <div className="button prev">button 1</div>
                    <div className="button next">button 2</div>
                </div>;
    }
};
