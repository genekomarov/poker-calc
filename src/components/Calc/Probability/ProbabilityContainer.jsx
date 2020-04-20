import {connect} from "react-redux";
import Probability from "./Probability";
import {updateProbabilities} from "../../../redux/reducers/calc-reducer";

let mapStateToProps = (state) => {
    return {
        pokerHands: state.calc.pokerHands
    }
};

let mapDispatchToProps = {
    updateProbabilities
};

const ProbabilityContainer = connect(mapStateToProps, mapDispatchToProps)(Probability);

export default ProbabilityContainer;