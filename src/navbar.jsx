import React from "react";
import ReactDOM from "react-dom/client";
import "./Styling/navbar.css";

function Navbar () {
    return (
        <div className="navbar">
            <nav>
                <div className="navbar-items">
                    <ul>
                        <li className="logo"> <i className="fa-solid fa-user fa-xl" style={{ color: '#ffffff' }}></i> &nbsp; <h1>Ahmad Saeed</h1></li>

                        <div className="nav-links">
                            <li>Home</li>
                            <li>About Me</li>
                            <li>Contact Me</li>
                        </div>

                        <li className="search">
                            <input className="nav-input" type="text" placeholder="Search Catagory" />
                            <i className="fa-solid fa-magnifying-glass magnifying-glass" style={{ color: '#000' }}></i>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar; 