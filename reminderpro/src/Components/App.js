import React, {Component} from 'react';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import {addReminder} from '../actions';


class App extends Component{
    constructor(props){
        super(props);
        this.state={
            text: ''
        }
    }

    save(){
        // console.log(this);
        this.props.addReminder(this.state.text);
    }

    render(){
        console.log(this.props);
        return (
            <div className="app">
                <div className="title">Reminder PRO</div>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="I have to ..."
                            onChange={e=>this.setState({text: e.target.value})}
                        />
                        <InputGroup.Addon>
                            <Glyphicon 
                            glyph="plus"
                            onClick={()=>this.save()}
                            >
                            </Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
            </div>
        );
    }
}

function addStateToProps(state){
    return {
        reminders: state
    }
}

export default connect(addStateToProps, {addReminder})(App);