import React from "react";


const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Ankit Chat</span>
                <span className="logo">Login</span>
                <form>
                    <input type="email" placeholder="email" />
                    <input type="password" placeholder="password" />
                    <button>Sign in</button>
                </form>
                <p>You don't have an account? Register</p>
            </div>
        </div>
    )
}

export default Login;