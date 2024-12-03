import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext/index.jsx";
import {
    doSignInWithEmailAndPassword,
    doSingInWithGoogle,
} from "../firebase/auth.js";
import "./Login.css";

const Login = () => {
    const { userLoggedIn } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignedIn, setIsSignedIn] = useState(false);

    const [error, setError] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!isSignedIn) {
                setIsSignedIn(true);
                await doSignInWithEmailAndPassword(email, password);
                navigate("/");
            }
        } catch (error) {
            setError("Failed to login");
        }
    };
    const GoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            if (!isSignedIn) {
                setIsSignedIn(true);
                await doSingInWithGoogle().catch((error) => {
                    console.log(error);
                    setIsSignedIn(false);
                });
                navigate("/");
            }
        } catch (error) {
            setError("Failed to login");
        }
    };

    return (
        <div className="login-wrapper">
            <form className="login-form" onSubmit={onSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>

            <button className="google-login" onClick={GoogleSignIn}>
                Sign in with Google
            </button>
        </div>
    );
};

export default Login;
