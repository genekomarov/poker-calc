import {connect} from "react-redux";
import CardSuit from "./CardSuit";
import {changeCard, changeSuit, changeValue, updateCurrentDeck} from "../../../../redux/reducers/calc-reducer";

let mapStateToProps = (state) => {
    return {
        cardValue:
            state.calc[state.calc.cardSelectionDialog.visibleFor]
                .set[state.calc[state.calc.cardSelectionDialog.visibleFor].activeItem-1]
    }
};

let mapDispatchToProps = { //as Object
    changeValue,
    changeSuit,
    changeCard,
    updateCurrentDeck
};

const CardSuiteContainer = connect(mapStateToProps, mapDispatchToProps)(CardSuit);

export default CardSuiteContainer;