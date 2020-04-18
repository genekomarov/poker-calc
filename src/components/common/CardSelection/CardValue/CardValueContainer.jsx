import {connect} from "react-redux";
import CardValue from "./CardValue";
import {changeCard, changeValue} from "../../../../redux/reducers/calc-reducer";

let mapStateToProps = (state) => {
    return {}
};

let mapDispatchToProps = { //as Object
    changeValue,
    changeCard,
};

const CardValueContainer = connect(mapStateToProps, mapDispatchToProps)(CardValue);

export default CardValueContainer;