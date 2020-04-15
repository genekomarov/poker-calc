import React from 'react';
import s from './Card.module.css'
import cardsImage from './../../../assets/images/cards.jpg'

const Card = (props) => {

    let offset = 0 - props.cardId *  42.51;

    return (
        <div
            className={s.card}
            style={{
                backgroundImage: `url(${cardsImage})`,
                backgroundPositionX: offset
            }}
            onClick={ () => {props.clickCard(props.showFor, props.cardId)} }>
        </div>
    );
};

export default Card;