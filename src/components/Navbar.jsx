import React from "react";

const Navbar =() => {
    return(
        <div className="navbar">
            <span className="Logo">Ankit chat</span>
            <div className="user">
                <img src="https://th.bing.com/th/id/OIP.W13uoa8hbkvpDySyBfM8IgHaHk?w=218&h=220&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                <span>Ankit</span>
                <button>logout</button>
            </div>
        </div>
    )
}

export default Navbar;