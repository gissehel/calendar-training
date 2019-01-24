import actions from "../../actions";
import TodoNewItem from "../components/todoNewItem";
import hot from './utils/hot';

const MapStateToPropsTodoNewItem = (state) => {
    return {
        current: state.todo.currentNewItem,
    };
}

const MapDispatchToPropsTodoNewItem = (dispatch) => {
    return {
        onNew: (newItem) => dispatch(actions.todo.addNewItem(newItem)),
        onUpdateCurrent: (currentNewItem) => dispatch(actions.todo.updateCurrentNewItem(currentNewItem)),
    };
}

export default hot(module, MapStateToPropsTodoNewItem, MapDispatchToPropsTodoNewItem, TodoNewItem);

