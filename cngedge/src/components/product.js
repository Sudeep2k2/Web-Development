import React from "react";
import Prod from './productcng.svg';
import prod1 from './cngproduct1.jpeg';
import prod2 from './cngproduct2.jpeg';

export default function Product() {
    return(
        <div className="pro">
            <div className="product">
                <div className="heading">
                    <h1>PRODUCT</h1>
                    <img src={Prod} alt="Product"></img>
                </div>
                <div className="subh">
                    DIESEL AND CNG / LPG MIX CONVERSIONS KIT FOR GLOBAL MARKET FROM USA FOR BUS AND TRUCKS
                </div>
                <div className="content">
                    <p>
                        Diesel engines operate differently than gasoline engines for that reason CNG / LPG conversions for diesel engines are different. All diesel/CNG systems are considered "duel fuel" or "Co-Fuel" systems. This is because diesel engines do not have spark Ignitions systems and require a portion of diesel fuel to ignite the natural gas in the combustion chamber. The engine is actually running on two fuels at the same time. Because natural gas is already in diesel form it can easily be mixed with the flow of air going into your engine through the intake manifold. This natural gas/air mixture is then delivered into the combustion chamber where the diesel fuel is injected into the combustion chamber at the same time and then ignited by the diesel fuel.
                    </p>
                    <p>
                        The Dual Fuel system is an innovative fuel system. In diesel engines, this system makes it possible to substitute a part of diesel by cleaner and cheaper (bio) LPG/CNG.
                    </p>
                    <p>
                        The injection system uses advanced electronics and software to combine the two fuels, and to create an optimal mix between diesel and the alternative fuel (LPG/CNG). The AFC unit (Alternative Fuel Controller) calculates realtime the amount of diesel fuel that can be replaced. The AFC also calculates the amount of gas that needs to be injected to guarantee the same performance (power and torque) as achieved with the original diesel fuel. This reduces consumption and operating costs without affecting the engine life and performance.
                    </p>
                </div>
                <div className="prodpics">
                        <div className="pic1">
                            <img src={prod1} alt="Product 1"></img>
                        </div>
                        <div className="pic2">
                            <img src={prod2} alt="Product 2"></img>
                        </div>
                </div>
            </div>
        </div>
    )
}