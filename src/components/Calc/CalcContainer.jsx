import {connect} from "react-redux";
import Calc from "./Calc";
import {initCardDeck, updateProbabilities} from "../../redux/reducers/calc-reducer";

let mapStateToProps = (state) => {
    return {

    }
};

let mapDispatchToProps = {
    initCardDeck,
    updateProbabilities
};

const CalcContainer = connect(mapStateToProps, mapDispatchToProps)(Calc);

export default CalcContainer;