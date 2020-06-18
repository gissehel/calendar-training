import actions from "../../actions";
import NextButton from "../components/nextButton";
import hot from './utils/hot';

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


export default hot(module, MapStateToProps, MapDispatchToProps, NextButton);
