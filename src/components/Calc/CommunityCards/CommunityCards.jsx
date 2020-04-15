import React from 'react';
import s from './CommunityCards.module.css'
import CardContainer from "../../common/Card/CardContainer";
import CardSelectionContainer from "../../common/CardSelection/CardSelectionContainer";

const CommunityCards = (props) => {

    return (
        <div className={s.wrapper}>
            <h3>Community cards</h3>
            <div className={s.cardsWrapper}>
                <CardContainer showFor='CARDS-ON-TABLE' cardId='1'/>
                <CardContainer showFor='CARDS-ON-TABLE' cardId='10'/>
                <CardContainer showFor='CARDS-ON-TABLE' cardId='20'/>
                <CardContainer showFor='CARDS-ON-TABLE' cardId='30'/>
                <CardContainer showFor='CARDS-ON-TABLE' cardId='40'/>
            </div>
            <CardSelectionContainer />
            <p className={s.raund}>raund</p>
        </div>
    );
};

export default CommunityCards;