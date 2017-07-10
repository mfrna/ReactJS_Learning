import React, { Component } from 'react';
import {firebaseApp} from '../firebase'
import '../App.css';
import {connect} from 'react-redux';
import AddGoal from './AddGoal';
import GoalsList from './GoalsList';

class App extends Component {
  signOut(){
    firebaseApp.auth().signOut();
  }
  render() {
    return (
      <div className="App">
        <h3>Goal Coach</h3>
        <AddGoal />
        <GoalsList />
        <button 
            className="btn btn-danger"
            onClick={()=>this.signOut()}
        >Sign Out</button>
      </div>
    );
  }
}

function mapStatetoProps(state){
    console.log(state);
    const {email} = state;
    return {email};
}

export default connect(mapStatetoProps,null)(App);
