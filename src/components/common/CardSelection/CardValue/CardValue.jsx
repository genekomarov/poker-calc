import React from 'react';
import CardIMGContainer from "../../CardIMG/CardIMGContainer";
//import s from '   '

const CardValue = (props) => {

    let onClickHandler = (e) => {
        props.changeValue(props.cardId);
        props.changeCard(props.cardId);
        props.updateCurrentDeck();
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

export default CardValue;
