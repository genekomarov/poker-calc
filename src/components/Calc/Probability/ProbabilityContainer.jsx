import {connect} from "react-redux";
import Probability from "./Probability";
import {updateProbabilities} from "../../../redux/reducers/calc-reducer";

let mapStateToProps = (state) => {
    return {
        pokerHands: state.calc.pokerHands,
        playersNumber: state.calc.playersNumber,

        communityCardSet: state.calc.communityCards.set,
        handCardSet: state.calc.handCards.set,
        isCalculations: state.calc.isCalculations
    }
};

let mapDispatchToProps = {
    updateProbabilities
};

const ProbabilityContainer = connect(mapStateToProps, mapDispatchToProps)(Probability);

export default ProbabilityContainer;