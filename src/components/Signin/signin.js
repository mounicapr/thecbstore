import React from 'react';
import './signin.scss';

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
            <form>
                <input type="email" name="email" value={this.state.email} required />
                <label>Email</label>
                <input type="password" name="password" value={this.state.password} required />
                <label>Password</label>
                <input type="submit" value="Sign In" />
            </form>
            </div>
        )
    }
};
export default SignIn;