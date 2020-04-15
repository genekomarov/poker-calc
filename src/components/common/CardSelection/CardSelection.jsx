import React from 'react';
import s from './CardSelection.module.css'
import Card from "../Card/Card";

const CardSelection = (props) => {

    return (
        <div className={s.cardSelection} onClick={props.clickCardSelectionWrapperHendler}>
            <div className={s.cardValue}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className={s.cardSuit}>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};

export default CardSelection;