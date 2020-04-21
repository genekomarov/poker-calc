import React from 'react';
import s from './Calc.module.css'
import CommunityCardsContainer from "./CommunityCards/CommunityCardsContainer";
import YourHandContainer from "./YourHand/YourHandContainer";
import ProbabilityContainer from "./Probability/ProbabilityContainer";


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
                    <ProbabilityContainer />
                    <div className={s.copyrights}>
                        <p>© developed by Eugene Komarov 2020</p>
                        <p>uses React, Redux, poker-calc libraries</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calc;