import React, {Component} from 'react';
import {goalsBase} from '../firebase';
import {connect} from 'react-redux';
// import {LogUser} from '../actions';

class AddGoal extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: ''
        }
    }

    addGoal(){
        // console.log(this.state.title);
        const {email} = this.props;
        const {title} = this.state;
        goalsBase.push({email, title});
    }

    render(){
        console.log('propss', this.props);
        return (
            <div className="form-inline">
                <div className="form-group">
                    <input 
                        type="text"
                        placeholder="Add a goal"
                        className="form-control"
                        style={{marginRight:'5px'}}
                        onChange={(e)=>this.setState({title: e.target.value})}
                    />
                    <button
                        className="btn btn-success"
                        onClick={()=>this.addGoal()}
                    >
                    Submit
                    </button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    console.log('mapStateToProps state', state);
    const {email} = state.userReducer;
    return {
        email
    };
}

export default connect(mapStateToProps, null)(AddGoal);