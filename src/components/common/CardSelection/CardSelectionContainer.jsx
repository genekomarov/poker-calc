import {connect} from "react-redux";
import CardSelection from "./CardSelection";
import {closeCardSelectionDialog} from "../../../redux/reducers/calc-reducer";

let mapStateToProps = (state) => {
    return {
        selectedValue: state.calc.cardSelectionDialog.selectedValue,
        selectedSuit: state.calc.cardSelectionDialog.selectedSuit
    }
};

let mapDispatchToProps =  {
    closeCardSelectionDialog
};

const CardSelectionContainer = connect(mapStateToProps, mapDispatchToProps)(CardSelection);

export default CardSelectionContainer;