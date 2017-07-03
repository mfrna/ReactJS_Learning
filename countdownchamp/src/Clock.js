import React, {Component} from 'react';
import './App.css'

class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            timer: {}
        };
    }

    getTimeUntil(deadline){
        const diff =        Date.parse(deadline) - Date.parse(new Date());
        const seconds =     Math.floor((diff/1000)%60);
        const minutes =     Math.floor((diff/(1000*60))%60);
        const hours =       Math.floor((diff/(1000*60*60))%24);
        const days =        Math.floor(diff/(1000*60*60*24));
        this.setState({seconds,minutes,hours,days});
        if(diff==0){
            setTimeout(()=>alert("IT'S HERE!!"),10); // delay the alert for 10 msec to allow updating the screen before it appears
            clearInterval(this.state.timer);
        }
    }

    componentWillMount(){
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount(){
        let timer = setInterval(()=>this.getTimeUntil(this.props.deadline),1000);
        this.setState({timer});
    }

    leadingZero(num){
        return (num<10)?'0'+num:num;
    }

    render(){
        return (
            <div>
                <div className="clock days">{this.leadingZero(this.state.days)} days</div>
                <div className="clock hours">{this.leadingZero(this.state.hours)} hours</div>
                <div className="clock minutes">{this.leadingZero(this.state.minutes)} minutes</div>
                <div className="clock seconds">{this.leadingZero(this.state.seconds)} seconds</div>
            </div>
        );
    }
}

export default Clock;