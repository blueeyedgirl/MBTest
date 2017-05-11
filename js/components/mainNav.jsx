import React from 'react';
import ReactDOM from 'react-dom';

export default class MainNav extends React.Component {
    render() {
        return  <div>
                    <div className="button start">Zacznij test</div>
                    <br/><br/>
                    <div className="button more">Więcej o teście</div>
                    <div className="button types">Poznaj 16 typów osobowości</div>
                </div>;
    }
};
