import React from 'react';
import s from './Calc.module.css'
import YourHand from "./YourHand/YourHand";
import Probability from "./Probability/Probability";
import CommunityCardsContainer from "./CommunityCards/CommunityCardsContainer";


const Calc = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.calcWrapper}>
                <CommunityCardsContainer />
                <YourHand />
                <Probability />
            </div>
        </div>
    );
};

export default Calc;