import React from "react";
// import contactus from './';

export default function about() {
    return(        
        <div className="contactus">
            <div className="minicontact">
                <div className="head">
                    <h1>Contact Us</h1>
                </div>
                <div className="boxes">
                    <input placeholder="Name"></input>
                    <input placeholder="Email ID"></input>
                    <input type="number" placeholder="Phone Number" maxlength="10"></input>
                    <input placeholder="Message"></input>
                </div>
            </div>
        </div>
    )
}