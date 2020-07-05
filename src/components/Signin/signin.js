import React from 'react';
import './signin.scss';
import FormInput from '../FormInput/forminput';
import CustomButton from '../Custom-Button/custombutton';
import {signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value});
    }
    
    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''});
    }
    render() {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
            <form onSubmit= {this.handleSubmit} >
                <FormInput 
                type="email" 
                name="email" 
                value={this.state.email} 
                handleChange={this.handleChange} 
                label='Email' required />
               
                <FormInput 
                type="password" 
                name="password" 
                value={this.state.password} 
                handleChange={this.handleChange} 
                label='Password' required />
                
                <CustomButton type="submit">Sign In</CustomButton>
                <CustomButton onClick={signInWithGoogle}>Sign In With Google</CustomButton>
            </form>
            </div>
        )
    }
};
export default SignIn;