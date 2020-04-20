import React from 'react';
import CardIMGContainer from "../../CardIMG/CardIMGContainer";


const CardSuit = (props) => {

    let onClickHandler = (e) => {

        props.changeSuit(props.cardId);

        let currentSuit = (((props.cardValue / 4) - Math.trunc(props.cardValue / 4 - 0.25)) * 4 + 52);

        if (props.currentCardDeck.indexOf(props.cardValue + (props.cardId - currentSuit)) === -1) {
            props.changeValue(0);
            props.changeCard(0);
        } else {
            props.changeValue(props.cardValue === 0 ? props.cardValue : props.cardValue + (props.cardId - currentSuit));
            props.changeCard(props.cardValue === 0 ? props.cardValue : props.cardValue + (props.cardId - currentSuit));
        }

        props.updateCurrentDeck();
        props.clearPokerHandsData();

        e.stopPropagation();
        debugger
    };

    return (
        <>
            <div onClick={onClickHandler}>
                <CardIMGContainer
                    cardId={props.cardId}
                    active={props.active}
                />
            </div>
        </>
    );
};

export default CardSuit;
