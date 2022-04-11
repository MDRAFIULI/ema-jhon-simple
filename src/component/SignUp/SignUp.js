import React, { useState } from 'react';
import auth from '../../firebase.init';
import '../Login/Login.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    console.log(email, 'vs', password);
    // const [,set]=useState('');
    const [createUserWithEmailAndPassword, hookError] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
    }
    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("didn't match")
            return;
        }
        // console.log(email, 'vs', password);
        createUserWithEmailAndPassword(email, password)
            .then(result => {
                console.log('usesr created');

            })
    }
    return (
        <div>
            <div className='form-container'>
                <div>
                    <h2>SignUp</h2>
                    <form onSubmit={handleCreateUser}>
                        <label htmlFor="email">email</label>
                        <input onBlur={handleEmailBlur} type="email" name="" id="" required />
                        <label htmlFor="password">password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="" id="" required />
                        <label htmlFor="confirm-password"></label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="" id="" required />
                        <p>{error}</p>
                        <p>hookError: {hookError}</p>
                        <input type="submit" value="signup" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;