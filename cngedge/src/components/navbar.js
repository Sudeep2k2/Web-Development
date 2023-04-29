import React from "react";
import mail from './mail.svg';

export default function Navbar(){
    return(
        <div className="navbar">
            <div className="logo">
                <img src="" alt="Logo"></img>
            </div>
            <div className="middle">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#product">Product</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="mailing">
                <img src={mail} alt="Mail"></img>
            </div>
        </div>
    )
}