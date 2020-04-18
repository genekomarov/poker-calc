import React from 'react';
import s from './CardIMG.module.css'
import cardsImage from './../../../assets/images/cards.jpg'

const CardIMG = (props) => {

    let offset = 0 - props.cardId *  42.51;

    return (
        <div
            className={`${s.card} ${props.active && s.active}`}

            style={{
                backgroundImage: `url(${cardsImage})`,
                backgroundPositionX: offset
            }}>
        </div>
    );
};

export default CardIMG;