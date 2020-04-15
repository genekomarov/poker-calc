import React from 'react';
import s from './Calc.module.css'
import CommunityCards from "./CommunityCards/CommunityCards";
import YourHand from "./YourHand/YourHand";
import Probability from "./Probability/Probability";


const Calc = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.calcWrapper}>
                <CommunityCards />
                <YourHand />
                <Probability />
            </div>
        </div>
    );
};

export default Calc;