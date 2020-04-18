import React from 'react';
import s from './CardSelection.module.css'
import CardValueContainer from "./CardValue/CardValueContainer";
import CardSuiteContainer from "./CardSuit/CardSuiteContainer";


const CardSelection = (props) => {


    let cardValue = (i) => props.selectedSuit === 52
        ? i * 4 - (52 - props.selectedSuit) - 3
        : i * 4 - (52 - props.selectedSuit) - 4;
    let cardValues = [];

    for (let i = 13; i >= 1; i--) {
        cardValues.push(
            <CardValueContainer
                key={i}
                active={props.selectedValue === cardValue(i) && true}
                cardId={cardValue(i)}/>)
    }

    cardValues.push(
        <CardValueContainer
            key={0}
            active={props.selectedValue === 0 && true}
            cardId={0}/>);


    let cardSuites = [];
    for (let i = 53; i <= 56; i++) {
        cardSuites.push(
            <CardSuiteContainer
                key={i}
                active={ props.selectedSuit === 52 ? props.selectedSuit + 1 === i && true : props.selectedSuit === i && true}
                cardId={i}/>)
    }

    return (
        <div
            className={s.cardSelection}
            onClick={props.closeCardSelectionDialog}>
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