import {connect} from "react-redux";
import CardSelection from "./CardSelection";
import {closeCardSelectionDialog, showRaund, tampCards} from "../../../redux/reducers/calc-reducer";

let mapStateToProps = (state) => {
    return {
        selectedValue: state.calc.cardSelectionDialog.selectedValue,
        selectedSuit: state.calc.cardSelectionDialog.selectedSuit,
        currentCardDeck: state.calc.currentCardDeck
    }
};

let mapDispatchToProps =  {
    closeCardSelectionDialog,
    tampCards,
    showRaund
};

const CardSelectionContainer = connect(mapStateToProps, mapDispatchToProps)(CardSelection);

export default CardSelectionContainer;