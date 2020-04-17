const CLICK_CARD = 'CLICK-CARD';

///////////////////////////////////////
const CHANGE_SUIT = 'CHANGE-SUIT';
const CHANGE_VALUE = 'CHANGE-VALUE';
const COMMUNITY_CARDS = 'COMMUNITY-CARDS';
const YOUR_CARDS = 'YOUR_CARDS';

let initialState =
    {
        cardTypeSet: [
            {value: null, suite: null},     // id: '0',
            {value: '2', suite: 'h'},       // id: '1',
            {value: '2', suite: 's'},       // id: '2',
            {value: '2', suite: 'd'},       // id: '3',
            {value: '2', suite: 'c'},       // id: '4',
            {value: '3', suite: 'h'},       // id: '5',
            {value: '3', suite: 's'},       // id: '6',
            {value: '3', suite: 'd'},       // id: '7',
            {value: '3', suite: 'c'},       // id: '8',
            {value: '4', suite: 'h'},       // id: '9',
            {value: '4', suite: 's'},       // id: '10',
            {value: '4', suite: 'd'},       // id: '11',
            {value: '4', suite: 'c'},       // id: '12',
            {value: '5', suite: 'h'},       // id: '13',
            {value: '5', suite: 's'},       // id: '14',
            {value: '5', suite: 'd'},       // id: '15',
            {value: '5', suite: 'c'},       // id: '16',
            {value: '6', suite: 'h'},       // id: '17',
            {value: '6', suite: 's'},       // id: '18',
            {value: '6', suite: 'd'},       // id: '19',
            {value: '6', suite: 'c'},       // id: '20',
            {value: '7', suite: 'h'},       // id: '21',
            {value: '7', suite: 's'},       // id: '22',
            {value: '7', suite: 'd'},       // id: '23',
            {value: '7', suite: 'c'},       // id: '24',
            {value: '8', suite: 'h'},       // id: '25',
            {value: '8', suite: 's'},       // id: '26',
            {value: '8', suite: 'd'},       // id: '27',
            {value: '8', suite: 'c'},       // id: '28',
            {value: '9', suite: 'h'},       // id: '29',
            {value: '9', suite: 's'},       // id: '30',
            {value: '9', suite: 'd'},       // id: '31',
            {value: '9', suite: 'c'},       // id: '32',
            {value: 'T', suite: 'h'},       // id: '33',
            {value: 'T', suite: 's'},       // id: '34',
            {value: 'T', suite: 'd'},       // id: '35',
            {value: 'T', suite: 'c'},       // id: '36',
            {value: 'J', suite: 'h'},       // id: '37',
            {value: 'J', suite: 's'},       // id: '38',
            {value: 'J', suite: 'd'},       // id: '39',
            {value: 'J', suite: 'c'},       // id: '40',
            {value: 'Q', suite: 'h'},       // id: '41',
            {value: 'Q', suite: 's'},       // id: '42',
            {value: 'Q', suite: 'd'},       // id: '43',
            {value: 'Q', suite: 'c'},       // id: '44',
            {value: 'K', suite: 'h'},       // id: '45',
            {value: 'K', suite: 's'},       // id: '46',
            {value: 'K', suite: 'd'},       // id: '47',
            {value: 'K', suite: 'c'},       // id: '48',
            {value: 'T', suite: 'h'},       // id: '49',
            {value: 'T', suite: 's'},       // id: '50',
            {value: 'T', suite: 'd'},       // id: '51',
            {value: 'T', suite: 'c'},       // id: '52',
            {value: null, suite: 'h'},      // id: '53',
            {value: null, suite: 's'},      // id: '54',
            {value: null, suite: 'd'},      // id: '55',
            {value: null, suite: 'c'}       // id: '56',
        ],
        pokerHands: [
            {name: 'base', currentProb: -1},                    // id: '0',
            {name: 'High Card', currentProb: -1},               // id: '1',
            {name: 'One Pair', currentProb: -1},                // id: '2',
            {name: 'Two Pair', currentProb: -1},                // id: '3',
            {name: 'Set', currentProb: -1},                     // id: '4',
            {name: 'Straight', currentProb: -1},                // id: '5',
            {name: 'Flush', currentProb: -1},                   // id: '6',
            {name: 'Full House', currentProb: -1},              // id: '7',
            {name: 'Four of a Kind', currentProb: -1},          // id: '8',
            {name: 'Straight-flush', currentProb: -1},          // id: '9',
            {name: 'Flush Royal', currentProb: -1}              // id: '10',
        ],

        cardDeck: {
            set: []
        },

        communityCardSet: {
            set: [5, 20, 35],
            selectedItem: 1
        },

        handCardSet: {
            set: [10],
            selectedItem: null
        },

        cardSelectionDialog: {
            selectedValueId: 49,
            selectedSuitId: 53
        },

    };

const calcReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK_CARD:
            switch (action.showFor) {
                case CHANGE_SUIT: {

                    let absValue = Math.trunc((state.cardSelectionDialog.selectedValueId + 4) / 4 - 0.25);
                    let value = absValue * 4 - 4 + action.cardId - 52;

                    let newState = {
                        ...state,
                        cardSelectionDialog: {
                            ...state.cardSelectionDialog,
                            selectedSuitId: action.cardId,
                            selectedValueId: value
                        },
                        communityCardSet: {
                            ...state.communityCardSet,
                            set: [...state.communityCardSet.set]
                        }
                    };

                    newState.communityCardSet.set[state.communityCardSet.selectedItem - 1] = value;

                    return newState;
                }
                case CHANGE_VALUE: {

                    let newState = {
                        ...state,
                        cardSelectionDialog: {
                            ...state.cardSelectionDialog,
                            selectedValueId: action.cardId
                        },
                        communityCardSet: {
                            ...state.communityCardSet,
                            set: [...state.communityCardSet.set]
                        },
                        /*handCardSet: {
                            ...state.handCardSet,
                            set: [ ...state.handCardSet.set]
                        }*/
                    };

                    newState.communityCardSet.set[state.communityCardSet.selectedItem - 1] = action.cardId;
                    return newState
                }

                case COMMUNITY_CARDS:
                    /*alert('COMMUNITY-CARDS ' + action.cardId);*/

                    return {
                        ...state,
                        communityCardSet: {
                            ...state.communityCardSet,
                            selectedItem: action.elementNumber
                        }
                    };

                default:
                    return state;
            }
        default:
            return state;
    }
};

export const clickCard = (showFor, cardId, elementNumber) =>
    ({
        type: CLICK_CARD,
        showFor,
        cardId,
        elementNumber
    });

export default calcReducer;