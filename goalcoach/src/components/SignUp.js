import React, { Component } from 'react';
import {Link} from 'react-router'
import { firebaseApp } from '../firebase';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
            error:{
                message:''
            }
        }
    }

    SignUp(){
        console.log(this.state);
        let {email, password} = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
        .catch(error=>this.setState({error}));
    }

    render() {
        return (
            <div className="SignUp form-inline">
                <h2>Goal Coach SignUp</h2>
                <div className="form-group">
                    <input 
                        className="form-control" 
                        placeholder="email" 
                        type="text"
                        onChange={(e)=>this.setState({email: e.target.value})}
                    />
                    <input 
                        className="form-control" 
                        placeholder="password" 
                        type="password" 
                        onChange={(e)=>this.setState({password: e.target.value})}
                    />
                    <button 
                        className="btn btn-primary" 
                        type="button"
                        onClick={()=>this.SignUp()}
                    >Sign Up</button>
                </div>
                <div className="">{this.state.error.message}</div>
                <div><Link to={'/signin'}>Already a member? Sign in instead</Link></div>
            </div>
        );
    }
}

export default SignUp;
