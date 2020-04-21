import {connect} from "react-redux";
import Probability from "./Probability";
import {changePlayersNumber, clearPokerHandsData, updateProbabilities} from "../../../redux/reducers/calc-reducer";

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
    updateProbabilities,
    changePlayersNumber,
    clearPokerHandsData
};

const ProbabilityContainer = connect(mapStateToProps, mapDispatchToProps)(Probability);

export default ProbabilityContainer;