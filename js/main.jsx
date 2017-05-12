import React from 'react';
import ReactDOM from 'react-dom';

import MainAbout from './components/mainAbout.jsx';
import MainNav from './components/mainNav.jsx';
import MainWelcome from './components/mainWelcome.jsx';
import Test from './components/test.jsx';


require('../sass/style.scss');

// firebase config

// import * as firebase from "firebase";
// const config = {
//     apiKey: "AIzaSyBuPLsY-BaW-VQn1B-ghMdxmeuVuD5yH9E",
//     authDomain: "test-9ed87.firebaseapp.com",
//     databaseURL: "https://test-9ed87.firebaseio.com",
//     // storageBucket: "<BUCKET>.appspot.com",
//     };
// firebase.initializeApp(config);
//
// const database = firebase.database();
// let databaseContent;
//
// firebase.database().ref('/questions').once('value').then( (snapshot) => {
//     databaseContent = (snapshot.val());
//     // console.log(databaseContent);
// });

// main app

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toDisplay: "main",
            db: null
        }
    }
    refreshDB = () => {
        fetch('http://localhost:3000/questions')
            .then( r => r.json() )
            .then( questions => {
                this.setState({
                    db: questions,
                });
            } );
    }
    componentDidMount() {
        this.refreshDB();
        // this.handleStartChange();
        //event listeners on main nav buttons
        let menuHome = document.querySelector(".colour-1");
        let menuAbout = document.querySelector(".colour-2");
        let menuTestStart = document.querySelector(".colour-3");
        let menuPersonalityTypes = document.querySelector(".colour-4");
        let menuStats = document.querySelector(".colour-5");

        menuHome.addEventListener("click", event => {
            this.setState({toDisplay: "main"});
        });
        menuAbout.addEventListener("click", event => {
            this.setState({toDisplay: "about"});
        });
        menuTestStart.addEventListener("click", event => {
            this.setState({toDisplay: "test"});
        });
        menuPersonalityTypes.addEventListener("click", event => {
            this.setState({toDisplay: "types"});
        });
        menuStats.addEventListener("click", event => {
            this.setState({toDisplay: "stats"});
        });


        // firebase.database().ref('/questions').once('value').then( (snapshot) => {
        //     let databaseContent = (snapshot.val());
        //     this.setState({db: databaseContent});
        //     // console.log(databaseContent);
        // });
    }
    handleStartChange = () => {
        this.setState({toDisplay: "test"});
    }
    render() {
        if (this.state.toDisplay == "main") {
            return  <div className="width">
                        <MainWelcome/>
                        <MainAbout/>
                        <MainNav onStartChange={this.handleStartChange}/>
                    </div>;
        }
        else if (this.state.toDisplay == "about") {
            return  <div className="width">
                        oooooooo
                    </div>;
        }
        else if (this.state.toDisplay == "test") {
            if ( !this.state.db ){
                return null;
            }
            return  <div className="width">
                        <Test db={this.state.db}/>
                    </div>;
        }
        else if (this.state.toDisplay == "types") {
            return  <div className="width">
                        tyt
                    </div>;
        }
        else if (this.state.toDisplay == "stats") {
            return  <div className="width">
                        statatatat
                    </div>;
        }
    }
};
// DOM loaded function

document.addEventListener('DOMContentLoaded', function(){

    let textContent = [
        {}
    ]

    ReactDOM.render(
        <App contentTexts={textContent}/>,
        // <App database={databaseContent} contentTexts={textContent}/>,
        document.getElementById('app')
    );
});
