import {pull, pullAll} from "lodash";

const INIT_CARD_DECK = 'INIT_CARD_DECK';
const SELECT_CARD = 'SELECT_CARD';
const CHANGE_VALUE = 'CHANGE_VALUE';
const CHANGE_SUIT = 'CHANGE_SUIT';
const CHANGE_CARD = 'CHANGE_CARD';
const CLOSE_CARD_SELECTION_DIALOG = 'CLOSE_CARD_SELECTION_DIALOG';
const TAMP_CARDS = 'TAMP_CARDS';
const UPDATE_CURRENT_DECK = 'UPDATE_CURRENT_DECK';
const SHOW_RAUND = 'SHOW_RAUND';
const CLEAR_CARD_SET = 'CLEAR_CARD_SET';
const UPDATE_PROBABILITIES = 'UPDATE_PROBABILITIES';
const CLEAR_POKER_HANDS_DATA = 'CLEAR_POKER_HANDS_DATA';
const CHANGE_PLAYERS_NUMBER= 'CHANGE_PLAYERS_NUMBER';

let initialState =
    {
        pokerHands: [
            {name: 'totalGames'      ,viewName: 'totalGames'       , value: 0},
            {name: 'base'            ,viewName: 'base'             , wins: 0, currentProb: "-"},
            {name: 'High_Card'       ,viewName: 'High Card'        , wins: 0, currentProb: "-"},
            {name: 'One_Pair'        ,viewName: 'One Pair'         , wins: 0, currentProb: "-"},
            {name: 'Two_Pair'        ,viewName: 'Two Pair'         , wins: 0, currentProb: "-"},
            {name: 'Three_of_a_Kind' ,viewName: 'Three of a Kind'  , wins: 0, currentProb: "-"},
            {name: 'Straight'        ,viewName: 'Straight'         , wins: 0, currentProb: "-"},
            {name: 'Flush'           ,viewName: 'Flush'            , wins: 0, currentProb: "-"},
            {name: 'Full_House'      ,viewName: 'Full House'       , wins: 0, currentProb: "-"},
            {name: 'Four_of_a_Kind'  ,viewName: 'Four of a Kind'   , wins: 0, currentProb: "-"},
            {name: 'Straight_Flush'  ,viewName: 'Straight Flush'   , wins: 0, currentProb: "-"},
            {name: 'Royal_Flush'     ,viewName: 'Royal Flush'      , wins: 0, currentProb: "-"}
        ],

        isCalculations: true,

        fullCardDeck: [],
        currentCardDeck: [],

        communityCards: {
            set: [],
            activeItem: null
        },

        handCards: {
            set: [],
            activeItem: null
        },

        cardSelectionDialog: {
            selectedValue: 49,
            selectedSuit: 53,
            visibleFor: null
        },

        raund: 'pre-flop',

        playersNumber: 5

    };

const calcReducer = (state = initialState, action) => {
        switch (action.type) {
            case INIT_CARD_DECK: {
                console.log(`${action.type}`);
                let newState = {
                    ...state,
                    fullCardDeck: (() => {
                        let cardDeck = [];
                        for (let i = 1; i <= 52; i++) cardDeck.push(i);
                        return cardDeck;
                    })()
                };
                newState.currentCardDeck = [...newState.fullCardDeck];
                return newState;
            }
            case SELECT_CARD:
                console.log(`${action.type} ${action.setName} ${action.itemNumber}`);
                return {
                    // Устанавливаем для выбранного набора активный элемент
                    ...state,
                    [action.setName]: {
                        ...state[action.setName],
                        activeItem: action.itemNumber
                    },
                    // Устанавливаем какой набор выбран
                    cardSelectionDialog: {
                        ...state.cardSelectionDialog,
                        visibleFor: action.setName
                    }
                };
            case CHANGE_VALUE:
                console.log(`${action.type} ${action.cardId}`);
                return {
                    // Устанавливаем выбранный номинал карты для формы
                    ...state,
                    cardSelectionDialog: {
                        ...state.cardSelectionDialog,
                        selectedValue: action.cardId
                    }
                };
            case CHANGE_SUIT:
                console.log(`${action.type} ${action.cardId}`);
                return {
                    // Устанавливаем выбранную рубашку для формы
                    ...state,
                    cardSelectionDialog: {
                        ...state.cardSelectionDialog,
                        selectedSuit: action.cardId
                    }
                };
            case CHANGE_CARD: {
                console.log(`${action.type} ${action.cardId}`);
                let newState = {
                    ...state,
                    [state.cardSelectionDialog.visibleFor]: {
                        ...state[state.cardSelectionDialog.visibleFor],
                        set: [
                            ...state[state.cardSelectionDialog.visibleFor].set
                        ]
                    }
                };

                // Меняем номинал выбранной карты в наборе
                newState[state.cardSelectionDialog.visibleFor]
                    .set[state[state.cardSelectionDialog.visibleFor].activeItem - 1] = action.cardId;

                //TEST UPDATE PROBABILITIES
                ////////////////////////////////
                newState.pokerHands = [...state.pokerHands];
                newState.pokerHands[0] = {...state.pokerHands[0]};
                newState.pokerHands[0].currentProb = 0;
                //////////////////////////////
                //END OF TEST UPDATE PROBABILITIES
                return newState;
            }
            case CLOSE_CARD_SELECTION_DIALOG:
                console.log(`${action.type}`);
                return {
                    // Сбрасываем выбранный набор
                    ...state,
                    cardSelectionDialog: {
                        ...state.cardSelectionDialog,
                        visibleFor: null
                    }
                };
            case TAMP_CARDS: {
                console.log(`${action.type}`);

                let newState = {
                    ...state,
                    communityCards: {
                        ...state.communityCards,
                        set: [
                            ...state.communityCards.set
                        ],
                        activeItem: null
                    },
                    handCards: {
                        ...state.handCards,
                        set: [
                            ...state.handCards.set
                        ],
                        activeItem: null
                    }
                };

                pull(newState.communityCards.set, 0, undefined);
                pull(newState.handCards.set, 0, undefined);

                return newState;
            }
            case UPDATE_CURRENT_DECK: {
                console.log(`${action.type}`);
                let newState = {
                    ...state,
                    currentCardDeck: [...state.fullCardDeck]
                };
                pullAll(newState.currentCardDeck, state.communityCards.set.concat(state.handCards.set));
                return newState;
            }
            case SHOW_RAUND:
                console.log(`${action.type}`);
                return {
                    ...state,
                    raund: (() => {
                        switch (state.communityCards.set.length) {
                            case 3:
                                return 'flop';
                            case 4:
                                return 'turn';
                            case 5:
                                return 'river';
                            default:
                                return 'pre-flop';
                        }
                    })()
                };
            case CLEAR_CARD_SET: {
                console.log(`${action.type} ${action.setNames}`);

                let newState = {
                    ...state,
                    communityCards: {...state.communityCards},
                    handCards: {...state.handCards}
                };

                for (let i = 0; i < action.setNames.length; i++) {

                    newState[action.setNames[i]].set = [];
                    newState[action.setNames[i]].activeItem = null;
                }

                newState.isCalculations = true;

                return newState;
            }
            case CLEAR_POKER_HANDS_DATA:{
                console.log(`${action.type}`);
                let newState = {
                    ...state,
                    pokerHands: [...state.pokerHands]
                };

                for (let i = 0; i < newState.pokerHands.length ; i++) newState.pokerHands[i] = {...state.pokerHands[i]};
                for (let i = 0; i < newState.pokerHands.length ; i++) {
                    i === 0
                        ? newState.pokerHands[i].value = 0
                        : newState.pokerHands[i].wins = 0;
                    newState.pokerHands[i].currentProb = 0;
                }

                newState.isCalculations = true;
                return newState;}
            case UPDATE_PROBABILITIES: {
                console.log(`${action.type} ${action.gamesData}`);
                let newState = {
                    ...state,
                    pokerHands: [...state.pokerHands]
                };

                for (let i = 0; i <= 11 ; i++) {
                    newState.pokerHands[i] = {...state.pokerHands[i]};
                }

                ///////////////////////

                //Установка totalGames
                newState.pokerHands[0].value += action.gamesData.totalGames;
                if (newState.pokerHands[0].value >= 100000) newState.isCalculations = false;

                //Подсчет base
                for (let key in action.gamesData) {
                    if (key !== 'totalGames') newState.pokerHands[1].wins += action.gamesData[key];
                }

                //Установка выйгрышей по рукам
                for (let i = 2; i <= 11 ; i++) {
                    for (let key in action.gamesData) {
                        if (newState.pokerHands[i].name === key) newState.pokerHands[i].wins += action.gamesData[key];
                    }
                }

                //Установка вероятностей
                for (let i = 1; i <=11 ; i++) {
                    newState.pokerHands[i].currentProb = Math.round(newState.pokerHands[i].wins / newState.pokerHands[0].value * 100);
                }
                return newState;
            }
            case CHANGE_PLAYERS_NUMBER:
                return {
                    ...state,
                    playersNumber: action.playersNumber
                };
            default:
                return state;
        }
    }
;

export const initCardDeck = () =>
    ({
        type: INIT_CARD_DECK,
    });

export const selectCard = (setName, itemNumber) =>
    ({
        type: SELECT_CARD,
        setName,
        itemNumber
    });

export const changeValue = (cardId) =>
    ({
        type: CHANGE_VALUE,
        cardId
    });

export const changeSuit = (cardId) =>
    ({
        type: CHANGE_SUIT,
        cardId
    });

export const changeCard = (cardId) =>
    ({
        type: CHANGE_CARD,
        cardId
    });

export const closeCardSelectionDialog = () =>
    ({
        type: CLOSE_CARD_SELECTION_DIALOG
    });

export const tampCards = () =>
    ({
        type: TAMP_CARDS
    });

export const updateCurrentDeck = () =>
    ({
        type: UPDATE_CURRENT_DECK
    });

export const showRaund = () =>
    ({
        type: SHOW_RAUND
    });

export const clearCardSet = (setNames) =>
    ({
        type: CLEAR_CARD_SET,
        setNames
    });

export const clearPokerHandsData = () =>
    ({
        type: CLEAR_POKER_HANDS_DATA,
    });

export const updateProbabilities = (gamesData) =>
    ({
        type: UPDATE_PROBABILITIES,
        gamesData
    });

export const changePlayersNumber = (playersNumber) =>
    ({
        type: CHANGE_PLAYERS_NUMBER,
        playersNumber
    });

export default calcReducer;