import actions from "../../actions";
import TodoList from "../components/todoList";
import hot from './utils/hot';

const MapStateToPropsTodoList = (state) => {
    return {
        list: state.todo.list
    };
}

const MapDispatchToPropsTodoList = (dispatch) => {
    return {
        onItemSelected: (item) => dispatch(actions.todo.markItemDone(item)),
    };
}

export default hot(module, MapStateToPropsTodoList, MapDispatchToPropsTodoList, TodoList);
