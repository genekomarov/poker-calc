import React from 'react';
import s from './Probability.module.css'

const Probability = () => {
    return (
        <>
            <div className={s.players}>
                <p>Calculate for</p>
                <input name='playersCount' type='number' min='2' max='9' step='1' placeholder='5'/>
                <span>players</span>
            </div>
            <h3 className={s.baseProb}>
                <span>winning</span>
                <span>50%</span>
            </h3>
            <div>
                <h4>winning with</h4>
                <ul>
                    <li className={s.pokerHand}>
                        <span className={s.pokerHandName}>One card</span>
                        <span>50%</span>
                    </li>
                    <li className={s.pokerHand}>
                        <span className={s.pokerHandName}>One card</span>
                        <span>50%</span>
                    </li>
                    <li className={s.pokerHand}>
                        <span className={s.pokerHandName}>One card</span>
                        <span>50%</span>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Probability;