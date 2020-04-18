import {connect} from "react-redux";
import Calc from "./Calc";
import {initCardDeck} from "../../redux/reducers/calc-reducer";

let mapStateToProps = (state) => {
    return {

    }
};

let mapDispatchToProps = {
    initCardDeck
};

const CalcContainer = connect(mapStateToProps, mapDispatchToProps)(Calc);

export default CalcContainer;