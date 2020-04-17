import React from 'react';
import s from './CommunityCards.module.css'
import CardContainer from "../../common/Card/CardContainer";
import CardSelectionContainer from "../../common/CardSelection/CardSelectionContainer";

const CommunityCards = (props) => {

    let cards = [];
    for (let i = 1; i <= 5; i++) {
        if (props.communityCardSet.set) {
            cards.push(
                <CardContainer
                    key={i}
                    active={props.communityCardSet.selectedItem === i && true}
                    showFor='COMMUNITY-CARDS'
                    cardId={props.communityCardSet.set[i - 1]}
                    elementNumber={i}/>
            )
        } else {
            cards.push(
                <CardContainer
                    key={i}
                    showFor='COMMUNITY-CARDS'
                    cardId={0}
                    elementNumber={i}/>
            )
        }
    }

    return (
        <div className={s.wrapper}>
            <h3>Community cards</h3>
            <div className={s.cardsWrapper}>
                {cards}
                {/*<CardContainer showFor='COMMUNITY-CARDS' cardId='1'/>
                <CardContainer showFor='CARDS-ON-TABLE' cardId='10'/>
                <CardContainer showFor='CARDS-ON-TABLE' cardId='20'/>
                <CardContainer showFor='CARDS-ON-TABLE' cardId='30'/>
                <CardContainer showFor='CARDS-ON-TABLE' cardId='40'/>*/}
            </div>
            <CardSelectionContainer />
            <p className={s.raund}>raund</p>
        </div>
    );
};

export default CommunityCards;