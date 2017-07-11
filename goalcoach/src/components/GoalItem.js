import React, {Component} from 'react';
import {goalsBase, compeletedGoalsBase} from '../firebase';
import {connect} from 'react-redux';

class GoalItem extends Component{
    setComplete(key){
        // console.log("complete", key);
        // console.log(this.props);
        let {title} = this.props.goal;
        compeletedGoalsBase.push({email: this.props.email, title});
        goalsBase.child(key).remove();
    }

    render(){
        return (
            <div>
                <span>{this.props.goal.title}</span>
                    - <span>{this.props.goal.email}</span>
                <button 
                    className="btn btn-small btn-primary" 
                    style={{marginLeft: '5px'}}
                    onClick={()=>this.setComplete(this.props.goal.key)}
                >
                    complete
                </button>
            </div>
        );
    }
}

function mapStateToProps(state){
    const {email} = state.userReducer;
    return {
        email
    }
}

export default connect(mapStateToProps, null)(GoalItem);