import React from 'react';

import { FaFacebookF } from 'react-icons/fa'
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    render() {
        const onChangeHandle = (e) => {
            const value = e.target.value;
            this.setState({
                [e.target.name]: value
            })
        }
        return (
            <div className='login-page'>
                <div className="form">

                    <h2>LOGIN</h2>
                    <div className="txt-field userName">
                        <input type="text" name="username" className="username"
                            value={this.state.username} onChange={onChangeHandle}
                            required />
                        <span></span>
                        <label for="username">User name</label>
                    </div>
                    <div className="txt-field userName">
                        <input type="password" name="password" className="username"
                            value={this.state.password} onChange={onChangeHandle}
                            required />
                        <span></span>
                        <label for="password">User name</label>
                    </div>
                    <div className='remember-me'>
                        <input name="remember-me" type="checkbox" />

                        <label for="remember-me" className="remember">Remember me</label>
                    </div>
                    <button className='submit-btn' onClick={() => this.props.handleLogin(this.state.username, this.state.password)} >login</button>
                    <div className="line-text"><span>or you can login with</span></div>
                    <div className="other-login-container">
                        <div className="facebook other-login"><FaFacebookF /><p>Facebook</p></div>
                        <div className="google-account other-login"><div id="google"></div><p>Google</p></div>
                    </div>
                    <div className="sign-up">
                        <p >Already created account <span>sign up now</span></p>
                    </div>


                </div >
            </div>
        )
    }
}
export default Login