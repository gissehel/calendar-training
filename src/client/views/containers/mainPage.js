import MainPage from "../components/mainPage";
import { connect } from 'react-redux';

/**
 * @param {import("../../reducers/app").State} state 
 */
const MapStateToProps = (state) => {
    return {
        is_start: state.question.is_start,
        is_question: state.question.is_question,
        is_answer: state.question.is_answer,
        is_result: state.question.is_result,
    };
};

const MapDispatchToProps = (dispatch) => {
    window.dispatch = dispatch;

    return {
    };
};


export default connect(MapStateToProps, MapDispatchToProps)(MainPage);
