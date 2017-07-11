import React, {Component} from 'react';
import {compeletedGoalsBase} from '../firebase';
import GoalItem from './GoalItem';

class CompletedGoalsList extends Component{
    constructor(props){
        super(props);
        this.state = {
            goals: [],
            user: ''
        }
    }

    componentDidMount(){
        compeletedGoalsBase.on('value', snap => {
            let goals = [];
            snap.forEach(goal => {
                const { email, title } = goal.val();
                const key = goal.key;
                goals.push({ email, title, key });
            })
            this.setState({goals});
        });
    }

    clearAll(){
        compeletedGoalsBase.set([]);
    }

    render(){
        return (
            <div>
                <h3>Completed Goals List</h3>
                {this.state.goals.map((goal)=>{
                    return (
                        <div key={goal.key}>
                            <span>{goal.title}</span>
                            - <span>{goal.email}</span>
                        </div>
                    );
                })}
                <button
                    className="btn btn-small btn-primary"
                    onClick={()=>this.clearAll()}
                >
                    Clear all
                </button>
            </div>
        );
    }
}

export default CompletedGoalsList;