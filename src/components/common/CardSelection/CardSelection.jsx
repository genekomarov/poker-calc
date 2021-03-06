import React from 'react';
import s from './CardSelection.module.css'
import CardValueContainer from "./CardValue/CardValueContainer";
import CardSuiteContainer from "./CardSuit/CardSuiteContainer";


const CardSelection = (props) => {

    let onClickHandler = () => {
        props.closeCardSelectionDialog();
        props.tampCards();
        props.showRaund();
    };

    let cardValue = (i) => {
        return props.selectedSuit === 52
            ? i * 4 - (52 - props.selectedSuit) - 3
            : i * 4 - (52 - props.selectedSuit) - 4
    };

    let cardValues = [];

    for (let i = 13; i >= 1; i--) {
        cardValues.push(
            <CardValueContainer
                key={i}
                active={props.selectedValue === cardValue(i)}
                cardId={
                    props.currentCardDeck.indexOf(cardValue(i)) !== -1 || props.selectedValue === cardValue(i)
                        ? cardValue(i)
                        : 0
                }/>)
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
            onClick={onClickHandler}
            className={s.cardSelection}>
            <div
                className={s.close}
            > </div>
            <div className={s.cardValues}>
                {cardValues}
            </div>
            <div className={s.cardSuits}>
                {cardSuites}
            </div>


        </div>
    );
};

export default CardSelection;