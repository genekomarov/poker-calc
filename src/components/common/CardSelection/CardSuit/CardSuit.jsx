import React from 'react';
import CardIMGContainer from "../../CardIMG/CardIMGContainer";
//import s from '   '

const CardSuit = (props) => {

    let onClickHandler = (e) => {

        props.changeSuit(props.cardId);

        let currentSuit = (((props.cardValue / 4) - Math.trunc(props.cardValue / 4 - 0.25)) * 4 + 52);

        props.changeValue(props.cardValue === 0 ? props.cardValue : props.cardValue + (props.cardId - currentSuit));
        props.changeCard(props.cardValue === 0 ? props.cardValue : props.cardValue + (props.cardId - currentSuit));

        e.stopPropagation();
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
