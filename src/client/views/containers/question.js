import actions from "../../actions";
import Question from "../components/question";
import { connect } from 'react-redux';

/**
 * @param {import("../../reducers/app").State} state 
 */
const MapStateToProps = (state) => {
    return {
        title: `${state.question.count} - ${state.question.current_question ? state.question.current_question.dateStr : "-"}${state.question.is_answer ? " - " + state.question.time : ""}`,
        selectedAnswer: state.question.current_answer,
        rightAnswer: state.question.is_answer ? state.question.current_question.expectedResult : null,
        lang: state.question.lang,
    };
};

/**
 * @param {import("react").Dispatch<import("redux").Action>} dispatch 
 */
const MapDispatchToProps = (dispatch) => {
    // @ts-ignore
    window.dispatch = dispatch;

    return {
        onAnswer: (/** @type {number} */day) => dispatch(actions.question.answer(day)),
    };
};

export default connect(MapStateToProps, MapDispatchToProps)(Question);
