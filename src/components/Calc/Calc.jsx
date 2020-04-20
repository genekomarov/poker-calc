import React from 'react';
import s from './Calc.module.css'
import CommunityCardsContainer from "./CommunityCards/CommunityCardsContainer";
import YourHandContainer from "./YourHand/YourHandContainer";
import ProbabilityContainer from "./Probability/ProbabilityContainer";


class Calc extends React.Component {

    /*async = (action) => {
        let buf = 0;
        let process = (level = 0) => {
            buf += 1;
            console.log(`${buf} ${level}`);
            if (buf <= 50) process(level+1);
            if (level === 0 && buf > 50) action();
        };
        process();
    };*/

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
                </div>
            </div>
        );
    }
}

export default Calc;