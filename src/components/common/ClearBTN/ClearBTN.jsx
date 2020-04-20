import React from 'react';
import s from './ClearBTN.module.css'

const ClearBTN = (props) => {
    return (
        <div
            className={s.wrapper}
            onClick={ () => {
                if (!props.visibleFor) {
                    props.clearCardSet(props.clearFor);
                    props.updateCurrentDeck();
                    props.clearPokerHandsData();
                }
            }}
        >
            {props.children}
        </div>
    );
};

export default ClearBTN;