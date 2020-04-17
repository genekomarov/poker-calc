import React from 'react';
import s from './CardSelection.module.css'
import CardContainer from "../Card/CardContainer";


const CardSelection = (props) => {

    let cardValue = (i) => i * 4 - (52-props.selectedSuitId) - 4;
    let cardValues = [];

    for (let i = 13; i >= 1 ; i--) {
        cardValues.push(
            <CardContainer
                key={i}
                active={props.selectedValueId === cardValue(i) && true}
                showFor='CHANGE-VALUE'
                cardId={cardValue(i)}/>)
    }

    let cardSuites = [];
    for (let i = 53; i <= 56 ; i++) {
        cardSuites.push(
            <CardContainer
                key={i}
                active={props.selectedSuitId === i && true}
                showFor='CHANGE-SUIT'
                cardId={i}/>)
    }


    return (
        <div className={s.cardSelection}>
            <div className={s.cardValue}>
                {cardValues}
            </div>
            <div className={s.cardSuit}>
                {cardSuites}
            </div>
        </div>
    );
};

export default CardSelection;