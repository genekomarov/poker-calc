import React from 'react';
import s from './YourHand.module.css'
import CardSelection from "../../common/CardSelection/CardSelection";
import CardContainer from "../../common/Card/CardContainer";

const YourHand = (props) => {

    return (
        <div className={s.wrapper}>
            <h3>Your hand</h3>
            <div className={s.cardsWrapper}>
                <CardContainer showFor='CARDS-ON-TABLE' cardId='15'/>
                <CardContainer showFor='CARDS-ON-TABLE' cardId='25'/>
            </div>
            {/*<CardSelection />*/}
        </div>
    );
};

export default YourHand;