import {connect} from "react-redux";
import Card from "./Card";
import {changeSuit, changeValue, selectCard} from "../../../../redux/reducers/calc-reducer";

let mapStateToProps = (state) => {
    return {}
};

let mapDispatchToProps = { //as Object
    selectCard,
    changeValue,
    changeSuit
};

const CardContainer = connect(mapStateToProps, mapDispatchToProps)(Card);

export default CardContainer;