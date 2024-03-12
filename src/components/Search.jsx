import React from "react";

const Search =() => {
    return(
        <div className="search">
            <div className="searchForm">
                <input type="text" placeholder="Find a user" />
            </div>

            <div className="userChat">
            <img src="https://th.bing.com/th/id/OIP.W13uoa8hbkvpDySyBfM8IgHaHk?w=218&h=220&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
            <div className="userChatInfo">
                <span>Ankit</span>
            </div>
            </div>
        </div>
    )
}

export default Search;