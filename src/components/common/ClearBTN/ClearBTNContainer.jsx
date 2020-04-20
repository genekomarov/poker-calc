import {connect} from "react-redux";
import ClearBTN from "./ClearBTN";
import {clearCardSet, clearPokerHandsData, updateCurrentDeck} from "../../../redux/reducers/calc-reducer";

let mapStateToProps = (state) => {
    return {
        visibleFor: state.calc.cardSelectionDialog.visibleFor
    }
};

let mapDispatchToProps = { //as Object
    clearCardSet,
    updateCurrentDeck,
    clearPokerHandsData
};

const ClearBTNContainer = connect(mapStateToProps, mapDispatchToProps)(ClearBTN);

export default ClearBTNContainer;