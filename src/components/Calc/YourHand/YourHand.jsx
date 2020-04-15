import React from 'react';
import s from './YourHand.module.css'
import Card from "../../common/Card/Card";
import CardSelection from "../../common/CardSelection/CardSelection";

const YourHand = (props) => {

    return (
        <div className={s.wrapper}>
            <h3>Your hand</h3>
            <div className={s.cardsWrapper}>
                <Card />
                <Card />
            </div>
            {/*<CardSelection />*/}
        </div>
    );
};

export default YourHand;