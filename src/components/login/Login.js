import React from 'react';
import Heading from "../layout/Heading";
import LoginForm from "./LoginForm";

export function Login() {
    return (
        <div className="Login">
            <Heading title="Login" />
            <LoginForm />
        </div>
    );
}

export default Login;
