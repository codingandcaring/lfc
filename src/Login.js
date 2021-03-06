import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loginUser} from './actions';


let mapStateToProps = (state) => {
    return {loggedInUser: state.loggedInUser}
};  

let mapDispatchToProps = (dispatch) => {
  return {dispatch: dispatch}
};

class LoginScreenDumb extends Component {

    

    render() {

        let toggleForm = (event) => {
            console.log(event.target);
        };

        let submitNewUserInformation = (event) => {
            event.preventDefault();
            console.log(event.target);
        };

        let submitUserLoginInformation = (event) => {
            event.preventDefault();
            let username = event.target.username.value;
            this.props.dispatch(loginUser({username}));
            event.target.reset();
            this.props.history.push(`/`)
        };

        return <div className="login-page">
            <div className="form" onSubmit={submitNewUserInformation}>
            <form className="register-form">
            <input type="text" name="name" placeholder="name"/>
            <input type="password" name="password" placeholder="password"/>
            <input type="text" name="email" placeholder="email address"/>
            <button type="submit">create</button>
            <p className="message">Already registered? <a onClick={toggleForm}>Sign In</a></p>
            </form>
            <form className="login-form" onSubmit={submitUserLoginInformation}>
            <input type="text" name="username" placeholder="username"/>
            <input type="password" name="password" placeholder="password"/>
            <button type="submit">login</button>
            <p className="message">Not registered? <a onClick={toggleForm}>Create an account</a></p>
            </form>
        </div>
        </div>
    }
}

let Login = connect(mapStateToProps, mapDispatchToProps)(LoginScreenDumb)
export default Login;

