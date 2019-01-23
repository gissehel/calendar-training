import actions from "../../actions";
import MessageBox from "../components/messageBox";
import hot from './utils/hot';

const MapStateToPropsMessageBox = (state) => {
    return {
        title: 'There is [' + state.messageBox.countRequested + '][' + state.messageBox.countReceived + '] validation',
        content: 'The current validation status is [' + (state.messageBox.validated ? 'validated' : 'not validated') + ']',
        busy: state.messageBox.busyCount > 0,
        values: state.messageBox.values,
    };
};

const MapDispatchToPropsMessageBox = (dispatch) => {
    window.dispatch = dispatch;

    return {
        onValidate: () => dispatch(actions.messageBox.validate()),
        onCancel: () => dispatch(actions.messageBox.cancel()),
    };
};


export default hot(module, MapStateToPropsMessageBox, MapDispatchToPropsMessageBox, MessageBox);
