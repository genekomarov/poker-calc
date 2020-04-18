import {connect} from "react-redux";
import YourHand from "./YourHand";

let mapStateToProps = (state) => {
    return {
        handCards: state.calc.handCards,
        visibleFor: state.calc.cardSelectionDialog.visibleFor
    }
};

let mapDispatchToProps = {

};

const YourHandContainer = connect(mapStateToProps, mapDispatchToProps)(YourHand);

export default YourHandContainer;