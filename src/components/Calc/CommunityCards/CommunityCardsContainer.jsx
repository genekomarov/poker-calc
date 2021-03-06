import {connect} from "react-redux";
import CommunityCards from "./CommunityCards";

let mapStateToProps = (state) => {
    return {
        communityCards: state.calc.communityCards,
        visibleFor: state.calc.cardSelectionDialog.visibleFor,
        raund: state.calc.raund
    }
};

let mapDispatchToProps = {

};

const CommunityCardsContainer = connect(mapStateToProps, mapDispatchToProps)(CommunityCards);

export default CommunityCardsContainer;