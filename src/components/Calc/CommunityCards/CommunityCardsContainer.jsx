import {connect} from "react-redux";
import CommunityCards from "./CommunityCards";

let mapStateToProps = (state) => {
    return {
        communityCardSet: state.calc.communityCardSet
    }
};

let mapDispatchToProps = { //as Object

};

const CommunityCardsContainer = connect(mapStateToProps, mapDispatchToProps)(CommunityCards);

export default CommunityCardsContainer;