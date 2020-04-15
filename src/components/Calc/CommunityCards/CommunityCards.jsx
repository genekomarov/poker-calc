import React from 'react';
import s from './CommunityCards.module.css'
import Card from "../../common/Card/Card";
import CardSelection from "../../common/CardSelection/CardSelection";

const CommunityCards = (props) => {

    return (
        <div className={s.wrapper}>
            <h3>Community cards</h3>
            <div className={s.cardsWrapper}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <CardSelection />
            <p className={s.raund}>raund</p>
        </div>
    );
};

export default CommunityCards;