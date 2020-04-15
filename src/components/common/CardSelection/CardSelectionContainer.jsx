import {connect} from "react-redux";
import CardSelection from "./CardSelection";

let mapStateToProps = (state) => {
    return {
        selectedSuitId: state.calc.cardSelectionDialog.selectedSuitId
    }
};

let mapDispatchToProps =  {

};

const CardSelectionContainer = connect(mapStateToProps, mapDispatchToProps)(CardSelection);

export default CardSelectionContainer;