import React from 'react';
import CardIMGContainer from "../../../common/CardIMG/CardIMGContainer";
//import s from '   '

const Card = (props) => {

    let onClickHandler = () => {

        debugger

        props.selectCard(props.setName, props.itemNumber);
        props.changeValue(props.cardId);
        props.changeSuit(((props.cardId / 4) - Math.trunc(props.cardId / 4 - 0.25)) * 4 + 52);
    };

    return (
        <>
            <div className='qwer' onClick={onClickHandler}>
                <CardIMGContainer
                    cardId={props.cardId}
                    active={props.active}
                />
            </div>
        </>
    );
};

export default Card;
