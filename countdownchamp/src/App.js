import React, {Component} from 'react';
import Clock from './Clock'
import {Form, FormControl, Button} from 'react-bootstrap';
import './App.css'

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            deadline: 'December 30, 2017',
            newDeadline: ''
        };
    }

    changeDeadline(){
        this.setState({deadline: this.state.newDeadline});
    }

    render(){
        return (
            <div className="App">
                <div className="App-title">
                Countdown to {this.state.deadline}
                </div>
                <Clock deadline={this.state.deadline}/>
                <Form inline>
                    <FormControl
                        onChange={event => this.setState({newDeadline: event.target.value})} 
                        placeholder="new date"
                        className="deadline-input"
                     />
                    <Button onClick={()=>this.changeDeadline()}>
                        submit
                    </Button>
                </Form>
            </div>
            );
    }
}

export default App;