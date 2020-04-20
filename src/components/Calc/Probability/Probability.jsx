import React from 'react';
import s from './Probability.module.css'

class Probability extends React.Component {

/*    async = (action) => {
        let buf = 0;
        let process = (level = 0) => {
            buf += 1;
            console.log(`${buf} ${level}`);
            if (buf <= 10000) setTimeout(process, 0, level+1);
            if (level === 0 && this.props.pokerHands[0].currentProb <= 1000) setTimeout(action, 10);
        };
        process();
    };*/


    cards = {
        cardTypes: [
            '2H', '2C', '2D', '2S',
            '3H', '3C', '3D', '3S',
            '4H', '4C', '4D', '4S',
            '5H', '5C', '5D', '5S',
            '6H', '6C', '6D', '6S',
            '7H', '7C', '7D', '7S',
            '8H', '8C', '8D', '8S',
            '9H', '9C', '9D', '9S',
            '10H', '10C', '10D', '10S',
            'JH', 'JC', 'JD', 'JS',
            'QH', 'QC', 'QD', 'QS',
            'KH', 'KC', 'KD', 'KS',
            'AH', 'AC', 'AD', 'AS',
        ]
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        /*this.async(this.props.updateProbabilities);*/

    }

    render() {

        let pokerHands = [];

        for (let i = 1; i <=10 ; i++) {
            pokerHands.push(
                <li
                    key={i}
                    className={s.pokerHand}>
                    <span className={s.pokerHandName}>{this.props.pokerHands[i].name}</span>
                    <span>{this.props.pokerHands[i].currentProb}%</span>
                </li>
            )
        }

        return (
            <>
                <div className={s.players}>
                    <p>Calculate for</p>
                    <input name='playersCount' type='number' min='2' max='9' step='1' placeholder='5'/>
                    <span>players</span>
                </div>
                <h3 className={s.baseProb}>
                    <span>winning</span>
                    <span>{this.props.pokerHands[0].currentProb}%</span>
                </h3>
                <div>
                    <h4>winning with</h4>
                    <ul>
                        {pokerHands}
                    </ul>
                </div>
            </>
        );
    }
}

export default Probability;