import React, {Component} from 'react';
import {goalsBase} from '../firebase';
import GoalItem from './GoalItem';

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
            let goals = [];
            snap.forEach(goal => {
                const { email, title } = goal.val();
                const key = goal.key;
                goals.push({ email, title, key });
            })
            this.setState({goals});
        });
    }

    render(){
        return (
            <div>
                <h3>Goals List</h3>
                {this.state.goals.map((goal)=>{
                    return (
                        <GoalItem goal={goal} key={goal.key} />
                    );
                })}
            </div>
        );
    }
}

export default GoalsList;