import { ADD_NEW_ITEM, MARK_ITEM_DONE, UPDATE_CURRENT_NEW_ITEM } from "../constants/todo";
import { VALIDATE_MESSAGE_RECEIVED } from "../constants/messageBox";

const initalState = { list: {}, currentNewItem: '' };

export default (state, action) => {
    state = state || initalState;

    try {
        switch (action.type) {
            case ADD_NEW_ITEM:
            {
                let item = action.newItem;
                let list = {...state.list};
                list[item] = true;
                return { ...state, list, currentNewItem: '' };
            }

            case MARK_ITEM_DONE:
            {
                let item = action.item;
                let list = {...state.list};
                list[item] = false;
                return { ...state, list };
            }

            case UPDATE_CURRENT_NEW_ITEM:
            {
                return { ...state, currentNewItem: action.newItem };
            }

            case VALIDATE_MESSAGE_RECEIVED:
            {
                let item = JSON.stringify(action.values);
                let list = {...state.list};
                list[item] = true;
                return { ...state, list };
            }

        }
    } finally {
        window.todoState = state;
    }

    return state;
}
