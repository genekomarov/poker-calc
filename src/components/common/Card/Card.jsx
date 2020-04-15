import React from 'react';
import s from './Card.module.css'
import cardsImage from './../../../assets/images/cards.jpg'

const Card = (props) => {

    return (
        <div
            className={s.card}
            style={{
                backgroundImage: `url(${cardsImage})`,
                backgroundPositionX: 0
            }}>
        </div>
    );
};

export default Card;