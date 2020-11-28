import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import "./Login.css"
import { Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AllowedUser, SpotLoaded } from '../../App';

firebase.initializeApp(firebaseConfig)

const Login = () => {

    const provider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();

    const [newUser, setNewUser] = useState(false)

    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: false,
    });
    
    const [loggedInUser,setLoggedInUser] = useContext(AllowedUser);
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };


    const handleBlur = (event) => {
        let isFieldValid = true;
        if (event.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value)
        }
        if (event.target.name === 'password') {
            const passwordLength = event.target.value.length > 6;
            const passwordHasNumber = /^\d+$/.test(event.target.value)
            isFieldValid = passwordHasNumber && passwordLength
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo)
        }
    }

    const handleClick = (event) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = ''
                    newUserInfo.success = true
                    setUser(newUserInfo)

                })
                .catch(error => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message
                    newUserInfo.success = false
                    setUser(newUserInfo)
                });
        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = ''
                    newUserInfo.success = true
                    setUser(newUserInfo)
                    setLoggedInUser(newUserInfo)
                    history.replace(from);

                })
                .catch(error => {
                    const newUserInfo = { ...user }
                    newUserInfo.error = error.message
                    newUserInfo.success = false
                    setUser(newUserInfo)
                    
                });
        }

        event.preventDefault();

    }

    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, email } = res
                const isSignedIn = {
                    isSignedIn: true,
                    name: displayName,
                    email: email
                }
                setUser(isSignedIn)
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }

    const handleFbSignIn = (event) => {

        firebase.auth().signInWithPopup(fbProvider)
            .then(function (result) {
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...
            }).catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });

    }
    return (
        <div className="login-form">
            <form onSubmit={handleClick}>
                {newUser ? <h2>Create an account</h2> : <h2>Login</h2>}
                <br />
                {newUser && <input type="text" name="firstName" onBlur={handleBlur} placeholder="First Name" required />}
                <br />
                <br />
                {newUser && <input type="text" name="lastName" onBlur={handleBlur} placeholder="Last Name" required />}
                <br />
                <br />
                <input type="email" onBlur={handleBlur} name='email' placeholder="Email"></input>
                <br></br>
                <input type="password" onBlur={handleBlur} name='password' placeholder="Password"></input>
                <br></br>
                {newUser && <input type="password" name="confirmPassword" placeholder="Confirm Password" />}
                <br />
                <br />
                <input type="submit" value={newUser ? 'Sign up' : 'Sign In'}></input>
                <br />
            </form>
            <p style={{ color: 'red' }}>{user.error}</p>
            {user.success && <p style={{ color: 'green' }}>User {newUser ? 'Added' : 'Logged In'} Successfully</p>}

            {
                !newUser ?
                    <p>Don't have an account?<Link onClick={() => setNewUser(!newUser)} className="create-account">Create an account</Link></p> :
                    <p>Already have an account?<Link onClick={() => setNewUser(!newUser)} className="create-account">Log In</Link></p>

            }
            <Button onClick={handleFbSignIn}>Continue with Facebook</Button>
            <br />
            <br />
            <Button onClick={handleGoogleSignIn}>Continue with Google</Button>
            <br />
            <br />
        </div>
    );
};

export default Login;