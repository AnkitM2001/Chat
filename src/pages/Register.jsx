import React from "react";
import add from "../img/addAvatar.png"

const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Ankit Chat</span>
                <span className="logo">Register</span>
                <form>
                    <input type="text"  placeholder="Username"/>
                    <input type="email"  placeholder="email"/>
                    <input type="password"  placeholder="password"/>
                    <input style={{display:"none"}} type="file" id="file"/>
                    <label htmlFor="file">
                        <img src={add} alt=""/>
                        <span>Add an avatar</span>

                    </label>
                    <button>Sign Up</button>
                </form>
                <p>You do have an account? Login</p>
            </div>
        </div>
    )
}

export default Register;