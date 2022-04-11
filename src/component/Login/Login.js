import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [,set]=useState('');
    // const [,set]=useState('');

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    return (
        <div className='form-container'>
            <div>
                <h2>Login</h2>
                <form action="">
                    <label htmlFor="email">email</label>
                    <input onBlur={handleEmailBlur} type="email" name="" id="" required />
                    <label htmlFor="password">password</label>
                    <input onBlur={handlePasswordBlur} type="password" name="" id="" required />
                    <button type="submit">Login</button>
                </form>
                <p>new to emajhon <Link to='/signUp'> create new</Link></p>
            </div>
        </div>
    );
};

export default Login;