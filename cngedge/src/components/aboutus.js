import React from "react";
import abt from './profile.svg';
import mail from './mail.svg';
import phone from './phone.svg';
import joel from './joelcng.jpg';
import sudan from './sudancng.jpeg';

export default function about() {
    return(        
        <div className="mainabt">
            <div className="aboutus">
                <div className="about">
                    <h1>ABOUT US</h1>
                    <img src={abt} alt="Abt us img"></img>
                </div>
                <div className="founders">
                    <div className="one">
                        <div className="role">
                            <h3>TECH INNOVATOR</h3>
                        </div>
                        <div className="photos">
                            <img src={joel} alt="JOEL EWELL"></img>
                        </div>
                            <div className="name">JOEL EWELL</div>
                            <div className="description">
                                Owner of Enhanced Technology Installations.
                                Inventor of the award winning Idle Free Heat system.
                            </div>
                            <div className="locn">
                                Salt Lake City Metropolitan Area, Riverton, Utah USA
                            </div>
                    </div>
                    <div className="two">
                        <div className="role">
                            <h3>DIRECTOR OF OPERATIONS</h3>
                        </div>
                        <div className="photos">
                            <img src={sudan} alt="SUDAN KOLAR"></img>
                        </div>
                        <div className="name">
                            SUDAN KOLAR
                        </div>
                        <div className="description">
                            Senior director, CNG Edge, CEO at Idle free heat
                        </div>
                        <div className="locn">
                            Kolar, Karnataka, India
                        </div>
                    </div>
                </div>
                <div className="images">
                    <a href="tel:8508095535">
                        <img className="first" src={phone} alt="Phone"></img>
                    </a>
                    <img className="second" src={mail} alt="Mail"></img>
                </div>
            </div>
        </div>
    )
}