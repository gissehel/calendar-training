import actions from "../../actions";
import QuizzMain from "../components/quizzmain";
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
        onStart: () => dispatch(actions.question.start()),
    };
};

export default connect(MapStateToProps, MapDispatchToProps)(QuizzMain);
