import actions from "../../actions";
import Question from "../components/question";
import hot from './utils/hot';

const MapStateToProps = (state) => {
    return {
        title : `${state.question.count} - ${state.question.current_question ? state.question.current_question.dateStr : "-"}`,
        selectedAnswer: state.question.current_answer,
        rightAnswer: state.question.is_answer ? state.question.current_question.expectedResult : null, 
    };
};

const MapDispatchToProps = (dispatch) => {
    window.dispatch = dispatch;

    return {
        onAnswer: (day) => dispatch(actions.question.answer(day)),
        onCancel: () => dispatch(actions.question.nextQuestion()),
        onExit: () => dispatch(actions.question.nextQuestion()),
    };
};


export default hot(module, MapStateToProps, MapDispatchToProps, Question);
