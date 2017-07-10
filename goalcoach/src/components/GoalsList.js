import React, {Component} from 'react';
import {goalsBase} from '../firebase';

class GoalsList extends Component{
    constructor(props){
        super(props);
        this.state = {
            goals: [],
            user: ''
        }
    }

    componentDidMount(){
        goalsBase.on('value', snap => {
            console.log(snap);
        });
    }

    render(){
        return (
            <div>
                {this.state.goals.map((goal)=>{
                    return (
                        <div>
                            <span>{goal.title}</span>
                             - <span>{goal.email}</span>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default GoalsList;