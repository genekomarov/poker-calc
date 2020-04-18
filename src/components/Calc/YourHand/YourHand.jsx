import React from 'react';
import s from './YourHand.module.css'
import CardContainer from "./Card/CardContainer";
import CardSelectionContainer from "../../common/CardSelection/CardSelectionContainer";

const YourHand = (props) => {

    let cards = [];
    for (let i = 1; i <= 2; i++) {
        if ( props.handCards.set[i-1] ) {
            cards.push(
                <CardContainer
                    key={i}
                    cardId={props.handCards.set[i-1]}
                    active={props.handCards.activeItem === i && true}
                    setName='handCards'
                    itemNumber={i}
                />
            )
        } else {
            cards.push(
                <CardContainer
                    key={i}
                    cardId={0}
                    active={props.handCards.activeItem === i && true}
                    setName='handCards'
                    itemNumber={i}
                />
            )
        }
    }

    return (
        <div className={s.wrapper}>
            <h3>Your hand</h3>
            <div className={s.cardsWrapper}>
                {cards}
            </div>
            { props.visibleFor === 'handCards' && <CardSelectionContainer />}
        </div>
    );
};

export default YourHand;