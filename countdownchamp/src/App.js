import React, {Component} from 'react';
import './App.css'

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            deadline: 'December 30, 2017'
        };
    }

    changeDeadline(){
        this.setState({deadline: 'November 11, 2017'});
    }

    render(){
        return (
            <div className="App">
                <div className="App-title">
                Countdown to {this.state.deadline}
                </div>
                <div>
                    <div className="clock days">100 days</div>
                    <div className="clock hours">23 hours</div>
                    <div className="clock minutes">50 minutes</div>
                    <div className="clock seconds">55 seconds</div>
                </div>
                <div>
                    <input placeholder="new date" />
                    <button onClick={()=>this.changeDeadline()}>
                        submit
                    </button>
                </div>
            </div>
            );
    }
}

export default App;