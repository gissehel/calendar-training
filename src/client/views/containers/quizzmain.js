import actions from "../../actions";
import QuizzMain from "../components/quizzmain";
import hot from './utils/hot';

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


export default hot(module, MapStateToProps, MapDispatchToProps, QuizzMain);
