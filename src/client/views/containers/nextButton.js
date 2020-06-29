import actions from "../../actions";
import NextButton from "../components/nextButton";
import { connect } from 'react-redux';

/**
 * @param {import("../../reducers/app").State} state 
 */
const MapStateToProps = (state) => {
    return {
    };
};

const MapDispatchToProps = (dispatch) => {
    window.dispatch = dispatch;

    return {
        onExit: () => dispatch(actions.question.nextQuestion()),
    };
};

export default connect(MapStateToProps, MapDispatchToProps)(NextButton);
