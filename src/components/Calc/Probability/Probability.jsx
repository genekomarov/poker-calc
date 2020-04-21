import React from 'react';
import s from './Probability.module.css';
import pokerCalc from 'poker-calc';
import {pull, pullAll} from "lodash";

class Probability extends React.Component {

    getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    };

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
        ],
        boardCards: [],
        playerCards: [
            {playerId: 1, cards: []},
        ],
        currentCardDeck: []
    };

    gamesData = {
        totalGames: 0,
        High_Card: 0,
        One_Pair: 0,
        Two_Pair: 0,
        Three_of_a_Kind: 0,
        Straight: 0,
        Flush: 0,
        Full_House: 0,
        Four_of_a_Kind: 0,
        Straight_Flush: 0,
        Royal_Flush: 0
    };


    //////////////////////////////////////////////
    //////////////////////////////////////////////

    //////////////////////////////////////////////
    //////////////////////////////////////////////
    setupCards = () => {
        let setupCurrentCardDeck = () => {
            this.cards.currentCardDeck = [...this.cards.cardTypes];
        };
        let setupBoardCards = () => {
            this.cards.boardCards = [];
            for (let i = 0; i < this.props.communityCardSet.length ; i++) {
                this.cards.boardCards.push(this.cards.cardTypes[this.props.communityCardSet[i]-1]);
            }
            pullAll(this.cards.boardCards, [null, undefined]);
        };
        let setupPlayerCards = () => {
            this.cards.playerCards = [];
            this.cards.playerCards.push({playerId: 0, cards: []});
            for (let i = 0; i < this.props.handCardSet.length ; i++) {
                this.cards.playerCards[0].cards.push(this.cards.cardTypes[this.props.handCardSet[i]-1]);
            }
            pullAll(this.cards.playerCards[0].cards, [null, undefined]);
        };
        let updateCurrentCardDeck = () => {
            pullAll(this.cards.currentCardDeck,
                this.cards.boardCards
                    .concat(this.cards.playerCards[0].cards))
        };
        let addBoardCards = () => {
            for (let i = this.cards.boardCards.length; i < 5 ; i++) {
                this.cards.boardCards.push(
                    getCard(this.cards.currentCardDeck[this.getRandomInt(this.cards.currentCardDeck.length)]));
            }
        };
        let addPlayerCards = () => {
            for (let i = this.cards.playerCards[0].cards.length; i < 2 ; i++) {
                this.cards.playerCards[0].cards.push(
                    getCard(this.cards.currentCardDeck[this.getRandomInt(this.cards.currentCardDeck.length)]));
            }
            for (let i = 1; i < this.props.playersNumber; i++) {
                this.cards.playerCards.push({playerId: i, cards: []});

                for (let j = 0; j < 2 ; j++) {
                    this.cards.playerCards[i].cards.push(
                        getCard(this.cards.currentCardDeck[this.getRandomInt(this.cards.currentCardDeck.length)]));
                }
            }
        };
        let getCard = (selectCard) => {
            pull(this.cards.currentCardDeck, selectCard);
            return selectCard;
        };

        setupCurrentCardDeck();
        setupBoardCards();
        setupPlayerCards();
        updateCurrentCardDeck();
        addBoardCards();
        addPlayerCards();
    };


    playGamesAsync = (dispatcher) => {
        let timers = [];
        let playGame = (level = 0) => {

            this.setupCards();
            let game = pokerCalc.getHoldemWinner({
                boardCards: this.cards.boardCards,
                playerCards: this.cards.playerCards
            }, {compactCards: true});
            this.gamesData.totalGames ++;

            let increase = game.length === 1 ? 1 : 0.5;

            if(game[0].playerId === 0) {
                switch (game[0].hand.handInfo.type) {
                    case 'High Card':
                        this.gamesData.High_Card += increase;
                        break;
                    case 'One Pair':
                        this.gamesData.One_Pair += increase;
                        break;
                    case 'Two Pair':
                        this.gamesData.Two_Pair += increase;
                        break;
                    case 'Three of a Kind':
                        this.gamesData.Three_of_a_Kind += increase;
                        break;
                    case 'Straight':
                        this.gamesData.Straight += increase;
                        break;
                    case 'Flush':
                        this.gamesData.Flush += increase;
                        break;
                    case 'Full House':
                        this.gamesData.Full_House += increase;
                        break;
                    case 'Four of a Kind':
                        this.gamesData.Four_of_a_Kind += increase;
                        break;
                    case 'Straight Flush':
                        this.gamesData.Straight_Flush += increase;
                        break;
                    case 'Royal Flush':
                        this.gamesData.Royal_Flush += increase;
                        break;
                    default: break;
                }
            }

            if (level < 99) {
                timers.push(setTimeout(playGame,0, level+1));
            } else {
                for (let i = 0; i < timers.length; i++) {
                    clearTimeout(timers[i]);
                }
                setTimeout(dispatcher, 0, this.gamesData);
            }
        };

        playGame();
    };


    componentDidUpdate(prevProps, prevState, snapshot) {


        this.setupCards();
        for (let key in this.gamesData) this.gamesData[key] = 0;
        this.props.isCalculations && this.playGamesAsync(this.props.updateProbabilities);
    }

    render() {

        let pokerHands = [];
        for (let i = 2; i <=11 ; i++) {
            pokerHands.push(
                <li
                    key={i}
                    className={s.pokerHand}>
                    <span className={s.pokerHandName}>{this.props.pokerHands[i].viewName}</span>
                    <span>{this.props.pokerHands[i].currentProb}%</span>
                </li>
            )
        }

        let selectOptions = [];
        for (let i = 2; i <= 9 ; i++) {
            this.props.playersNumber === i
                ? selectOptions.push(<option value={i} selected>{i}</option>)
                : selectOptions.push(<option value={i}>{i}</option>)
        }

        return (
            <>
                <div className={s.players}>
                    <p>Calculate for</p>
                    {/*<input name='playersCount' type='number' min='2' max='9' step='1' placeholder='5' defaultValue={this.props.playersNumber}/>*/}
                    <select
                        className={s.select}
                        name="playersCount"
                        onChange={ (event) => {
                            this.props.changePlayersNumber(event.target.value);
                            this.props.clearPokerHandsData();
                        }}
                    >
                        {selectOptions}
                    </select>
                    <span>players</span>
                </div>
                <h3 className={s.baseProb}>
                    <span>winning</span>
                    <span>{this.props.pokerHands[1].currentProb}%</span>
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