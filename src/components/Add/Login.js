import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import Add from './Add.js'
import './Login.css'
class Login extends Component {
    state = {
        password: '123',
        authorized: false
    }

    handleChange = (event) => {
        const password = event.target.value;
        if (password === this.state.password) {
            this.setState({ authorized: true })
        }
    }

    authorize = () => {
        if (this.state.authorized)
            return <Redirect path='/Log/Add' component={Add} />;
    }
    render() {
        let login = (
            <div className='login'>
                <div className='container'>
                    <h1>Enter The Password</h1>
                    <form onSubmit={this.authorize}>
                        <div className='input'>
                            <input
                                type="password"
                                onChange={event => this.handleChange(event)} placeholder='Password:123' className='in' />
                        </div>
                        <Link to='/Log/Add'><button type="submit" className='submit'>Submit</button></Link>
                    </form>
                </div>
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