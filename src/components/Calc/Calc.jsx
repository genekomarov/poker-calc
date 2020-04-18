import React from 'react';
import s from './Calc.module.css'
import CommunityCardsContainer from "./CommunityCards/CommunityCardsContainer";
import YourHandContainer from "./YourHand/YourHandContainer";


class Calc extends React.Component {

    componentDidMount() {
        this.props.initCardDeck();
    }

    render() {
        return (
            <div className={s.wrapper}>
                <div className={s.calcWrapper}>
                    <CommunityCardsContainer/>
                    <YourHandContainer />
                    {/*<Probability />*/}
                </div>
            </div>
        );
    }
}

export default Calc;