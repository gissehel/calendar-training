import actions from "../../actions";
import MainPage from "../components/mainPage";
import hot from './utils/hot';

const MapStateToProps = (state) => {
    const v= {
        is_start: state.question.is_start,
        is_question: state.question.is_question,
        is_answer: state.question.is_answer,
        is_result: state.question.is_result,
    };
    console.log({q : state.question, v})
    return v;
};

const MapDispatchToProps = (dispatch) => {
    window.dispatch = dispatch;

    return {
    };
};


export default hot(module, MapStateToProps, MapDispatchToProps, MainPage);
