import {connect} from "react-redux";
import {clickCard} from "../../../redux/reducers/calc-reducer";
import Card from "./Card";

let mapStateToProps = (state) => {
    return {}
};

let mapDispatchToProps = {
    clickCard
};

const CardContainer = connect(mapStateToProps, mapDispatchToProps)(Card);

export default CardContainer;