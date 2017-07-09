import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import {Link} from 'react-router';

class SignIn extends Component {
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

    SignIn(){
        console.log(this.state);
        let {email, password} = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email,password)
        .catch(error=>this.setState({error}))
        .then(()=>console.log("signed in!"));
    }

    render() {
        return (
            <div className="SignUp form-inline">
                <h2>Goal Coach SignIn</h2>
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
                        onClick={()=>this.SignIn()}
                    >Sign In</button>
                </div>
                <div className="">{this.state.error.message}</div>
                <div><Link to={'/signup'}>or Sign up instead</Link></div>
            </div>
        );
    }
}

export default SignIn;
