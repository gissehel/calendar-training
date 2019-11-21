import actions from "../../actions";
import Result from "../components/result";
import hot from './utils/hot';

const MapStateToProps = (state) => {
    let { times_right, times_wrong } = state.question;
    let lenTimeRight = times_right.length;
    let lenTimeWrong = times_wrong.length;
    let sumTimeRight = lenTimeRight > 0 ? times_right.reduce((x, y) => x + y) : 0;
    let sumTimeWrong = lenTimeWrong > 0 ? times_wrong.reduce((x, y) => x + y) : 0;
    return {
        rightAnswersCount: state.question.count_right,
        wrongAnswersCount: state.question.count_wrong,
        averageTime: (sumTimeRight+sumTimeWrong)/(lenTimeRight + lenTimeWrong),
        averageTimeRight: lenTimeRight>0 ? sumTimeRight/lenTimeRight : 0,
        averageTimeWrong: lenTimeWrong>0 ? sumTimeWrong/lenTimeWrong : 0,
    };
};

const MapDispatchToProps = (dispatch) => {
    window.dispatch = dispatch;

    return {
        onExit: () => dispatch(actions.question.reset()),
    };
};


export default hot(module, MapStateToProps, MapDispatchToProps, Result);
