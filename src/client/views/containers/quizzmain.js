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

/**
 * @param {import("react").Dispatch<import("redux").Action>} dispatch 
 */
const MapDispatchToProps = (dispatch) => {
    // @ts-ignore
    window.dispatch = dispatch;

    return {
        onStart: () => dispatch(actions.question.start()),
    };
};

export default connect(MapStateToProps, MapDispatchToProps)(QuizzMain);
