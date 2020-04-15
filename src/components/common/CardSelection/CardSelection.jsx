import React from 'react';
import s from './CardSelection.module.css'
import CardContainer from "../Card/CardContainer";


const CardSelection = (props) => {

    debugger

    let cards = [];
    for (let i = 13; i >= 1 ; i--) {
        cards.push(<CardContainer showFor='CHANGE-VALUE' cardId={i * 4 - (52-props.selectedSuitId) }/>)
    }

    return (
        <div className={s.cardSelection}>
            <div className={s.cardValue}>
                {cards}
                {/*<CardContainer showFor='CHANGE-VALUE' cardId='49'/>
                <CardContainer showFor='CHANGE-VALUE' cardId='45'/>
                <CardContainer showFor='CHANGE-VALUE' cardId='41'/>
                <CardContainer showFor='CHANGE-VALUE' cardId='37'/>
                <CardContainer showFor='CHANGE-VALUE' cardId='33'/>
                <CardContainer showFor='CHANGE-VALUE' cardId='29'/>
                <CardContainer showFor='CHANGE-VALUE' cardId='25'/>
                <CardContainer showFor='CHANGE-VALUE' cardId='21'/>
                <CardContainer showFor='CHANGE-VALUE' cardId='17'/>
                <CardContainer showFor='CHANGE-VALUE' cardId='13'/>
                <CardContainer showFor='CHANGE-VALUE' cardId='9'/>
                <CardContainer showFor='CHANGE-VALUE' cardId='5'/>
                <CardContainer showFor='CHANGE-VALUE' cardId='1'/>
                <CardContainer showFor='CHANGE-VALUE' cardId='0'/>*/}
            </div>
            <div className={s.cardSuit}>
                <CardContainer showFor='CHANGE-SUIT' cardId='53'/>
                <CardContainer showFor='CHANGE-SUIT' cardId='54'/>
                <CardContainer showFor='CHANGE-SUIT' cardId='55'/>
                <CardContainer showFor='CHANGE-SUIT' cardId='56'/>
            </div>
        </div>
    );
};

export default CardSelection;