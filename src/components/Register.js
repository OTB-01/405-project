import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { doCreateUserWithEmailAndPassword } from "../firebase/auth";
import "./Register.css";

const Register = () => {
    const navigate = useNavigate();
    const { userLoggedIn } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRegistered, setIsRegistered] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isRegistered) {
            setIsRegistered(true);
            await doCreateUserWithEmailAndPassword(email, password);
            navigate("/login");
        }
    };

    return (
        <div className="register-container">
            <h1>Register</h1>
            {userLoggedIn && <Navigate to="/" replace={true} />}
            <form className="register-form" onSubmit={onSubmit}>
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
                <button type="submit">Register</button>
                <span className="login-link">
                    or Login <Link to="/login">here</Link>
                </span>
            </form>
        </div>
    );
};
export default Register;
