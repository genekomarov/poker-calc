const ACTION_TYPE_1 = 'ACTION-TYPE-1';
const ACTION_TYPE_2 = 'ACTION-TYPE-2';

let initialState =
    {
        cardTypeSet: [
            {id: '0', value: null, suite: null},
            {id: '1', value: '2', suite: 'h'},
            {id: '2', value: '2', suite: 's'},
            {id: '3', value: '2', suite: 'd'},
            {id: '4', value: '2', suite: 'c'},
            {id: '5', value: '3', suite: 'h'},
            {id: '6', value: '3', suite: 's'},
            {id: '7', value: '3', suite: 'd'},
            {id: '8', value: '3', suite: 'c'},
            {id: '9', value: '4', suite: 'h'},
            {id: '10', value: '4', suite: 's'},
            {id: '11', value: '4', suite: 'd'},
            {id: '12', value: '4', suite: 'c'},
            {id: '13', value: '5', suite: 'h'},
            {id: '14', value: '5', suite: 's'},
            {id: '15', value: '5', suite: 'd'},
            {id: '16', value: '5', suite: 'c'},
            {id: '17', value: '6', suite: 'h'},
            {id: '18', value: '6', suite: 's'},
            {id: '19', value: '6', suite: 'd'},
            {id: '20', value: '6', suite: 'c'},
            {id: '21', value: '7', suite: 'h'},
            {id: '22', value: '7', suite: 's'},
            {id: '23', value: '7', suite: 'd'},
            {id: '24', value: '7', suite: 'c'},
            {id: '25', value: '8', suite: 'h'},
            {id: '26', value: '8', suite: 's'},
            {id: '27', value: '8', suite: 'd'},
            {id: '28', value: '8', suite: 'c'},
            {id: '29', value: '9', suite: 'h'},
            {id: '30', value: '9', suite: 's'},
            {id: '31', value: '9', suite: 'd'},
            {id: '32', value: '9', suite: 'c'},
            {id: '33', value: 'T', suite: 'h'},
            {id: '34', value: 'T', suite: 's'},
            {id: '35', value: 'T', suite: 'd'},
            {id: '36', value: 'T', suite: 'c'},
            {id: '37', value: 'J', suite: 'h'},
            {id: '38', value: 'J', suite: 's'},
            {id: '39', value: 'J', suite: 'd'},
            {id: '40', value: 'J', suite: 'c'},
            {id: '41', value: 'Q', suite: 'h'},
            {id: '42', value: 'Q', suite: 's'},
            {id: '43', value: 'Q', suite: 'd'},
            {id: '44', value: 'Q', suite: 'c'},
            {id: '45', value: 'K', suite: 'h'},
            {id: '46', value: 'K', suite: 's'},
            {id: '47', value: 'K', suite: 'd'},
            {id: '48', value: 'K', suite: 'c'},
            {id: '49', value: 'T', suite: 'h'},
            {id: '50', value: 'T', suite: 's'},
            {id: '51', value: 'T', suite: 'd'},
            {id: '52', value: 'T', suite: 'c'},
            {id: '53', value: null, suite: 'h'},
            {id: '54', value: null, suite: 's'},
            {id: '55', value: null, suite: 'd'},
            {id: '56', value: null, suite: 'c'}
        ],
        pokerHands: [
            {id: '0', name: 'base', currentProb: -1},
            {id: '1', name: 'High Card', currentProb: -1},
            {id: '2', name: 'One Pair', currentProb: -1},
            {id: '3', name: 'Two Pair', currentProb: -1},
            {id: '4', name: 'Set', currentProb: -1},
            {id: '5', name: 'Straight', currentProb: -1},
            {id: '6', name: 'Flush', currentProb: -1},
            {id: '7', name: 'Full House', currentProb: -1},
            {id: '8', name: 'Four of a Kind', currentProb: -1},
            {id: '9', name: 'Straight-flush', currentProb: -1},
            {id: '10', name: 'Flush Royal', currentProb: -1}
        ],
        cardDeck: [],
        communityCardSet: [],
        handCardSet: [],

        cardSelectionDialog: {
            showFor: '', // {communityCards,  handCards}
            selectedCard: {} //Object from cardTypeSet
        }

    };

const calcReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPE_1:
            return {};
        case ACTION_TYPE_2:
            return {};
        default:
            return state;
    }
};

export const addMessageTextCreator = () =>
    ({
        type: ACTION_TYPE_1
    });


export default calcReducer;