import React from "react";
import save from './savings.svg';
import caution from './caution.svg';
import cautionpic from './cautionpic.svg';
import savingpic from './savingpic.svg';
import safetypic from './safety.svg';

export default function last() {
    return (
        <div className="last">
            <div className="adv">
                    <h1>Advantages</h1>
                    <div className="advele">
                        <p>(1)Engine optimization, at reasonable price</p>
                        <p>(2)Increase mileage by 10-20%</p>
                        <p>(3)Decrease pollution by 70-80%</p>
                        <p>(4)Increase speed by 30%</p>
                        <p>(5)Increase engine speed by 30%</p>
                        <p>(6)Fuel savings is greater depending on the mix ratio on diesel to CNG / LPG</p>
                    </div>
            </div>
            <div className="trio">
                <div className="safety">
                    <div className="safetyhead">
                        <h2>Safety</h2>
                        A consolidated technology that has already been applied all over the world to medium and light commercial vehicles as well as heavy lorries.
                    </div>
                    <div className="safetytail">
                        <img src={safetypic} alt="Safety"></img>
                    </div>
                </div>
                <div className="savings">
                    <div className="savingtail">
                        <img src={savingpic} alt="Saving"></img>
                    </div>
                    <div className="savingmain">
                        <div className="savehead">
                            <h2>Savings</h2>
                            <img src={save} alt="Savings"></img>
                        </div>
                        The Diesel Dual Fuel system allows diesel engines to work with a mixture of diesel and natural gas, giving preference to natural gas to take advantage of the economic benefits.
                    </div>
                </div>
                <div className="caution">
                    <div className="cautionmain">
                        <div className="cautionhead">
                            <h2>Caution</h2>
                            <img src={caution} alt="Savings"></img>
                        </div>
                            Minimum running distance is preferably 8kms so that the  CNG / LPG and fuel mix evenly, to produce optimized mix
                    </div>
                    <div className="cautiontail">
                        <img src={cautionpic} alt="Caution"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}