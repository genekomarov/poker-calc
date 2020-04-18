import React from 'react';
import s from './YourHand.module.css'
import CardSelection from "../../common/CardSelection/CardSelection";
import CardIMGContainer from "../../common/CardIMG/CardIMGContainer";

const YourHand = (props) => {

    return (
        <div className={s.wrapper}>
            <h3>Your hand</h3>
            <div className={s.cardsWrapper}>
                <CardIMGContainer showFor='CARDS-ON-TABLE' cardId='15'/>
                <CardIMGContainer showFor='CARDS-ON-TABLE' cardId='25'/>
            </div>
            {/*<CardSelection />*/}
        </div>
    );
};

export default YourHand;