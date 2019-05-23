import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Add from './Add.js'
class Login extends Component {
    state = {
        password: '123',
        authorized: false
    }

    handleChange = (event) => {
        const password = event.target.value;
        console.log(password);
        if (password === this.state.password) {
            this.setState({ authorized: true })
        }
    }

    authorize = () => {
        if (this.state.authorized)
            return <Route path='/Add' component={Add} />;
    }
    render() {
        let login = (
            <div>
                <h1>Enter The Password</h1>
                <form onSubmit={this.authorize}>
                    <input
                        type="password"
                        onChange={event => this.handleChange(event)} placeholder='The Password Is 123' />
                    <Link to='/Add'><input type="submit" value='Submit' /></Link>
                </form>
            </div>
        );
        return (
            <div>
                {login}
            </div>
        )
    }

}
export default Login; 