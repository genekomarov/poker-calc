import React from 'react';
import s from './CommunityCards.module.css'
import CardContainer from "./Card/CardContainer";
import CardSelectionContainer from "../../common/CardSelection/CardSelectionContainer";

const CommunityCards = (props) => {

    let cards = [];
    for (let i = 1; i <= 5; i++) {
        if ( props.communityCards.set[i-1] ) {
            cards.push(
                <CardContainer
                    key={i}
                    cardId={props.communityCards.set[i-1]}
                    active={props.communityCards.activeItem === i && true}
                    setName='communityCards'
                    itemNumber={i}
                />
            )
        } else {
            cards.push(
                <CardContainer
                    key={i}
                    cardId={0}
                    active={props.communityCards.activeItem === i && true}
                    setName='communityCards'
                    itemNumber={i}
                />
            )
        }
    }

    return (
        <div className={s.wrapper}>
            <h3>Community cards</h3>
            <div className={s.cardsWrapper}>
                {cards}
            </div>
            { props.visibleFor === 'communityCards' && <CardSelectionContainer />}
            <p className={s.raund}>{props.raund}</p>
        </div>
    );
};

export default CommunityCards;