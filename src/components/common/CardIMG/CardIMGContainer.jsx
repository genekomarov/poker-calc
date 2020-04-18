import {connect} from "react-redux";
import CardIMG from "./CardIMG";

let mapStateToProps = (state) => {
    return {}
};

let mapDispatchToProps = {

};

const CardIMGContainer = connect(mapStateToProps, mapDispatchToProps)(CardIMG);

export default CardIMGContainer;