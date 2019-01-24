import { CANCEL_MESSAGE, VALIDATE_MESSAGE_REQUESTED, VALIDATE_MESSAGE_RECEIVED, VALIDATE_MESSAGE_FAILED } from "../constants/messageBox";

const initialState = { countRequested: 0, countReceived: 0, validated: false, busyCount: 0 };

export default (state, action) => {
    state = state || initialState;

    switch (action.type) {
        case VALIDATE_MESSAGE_REQUESTED:
            {
                state = { ...state, busy: true, countRequested: state.countRequested + 1, busyCount: state.busyCount + 1 };
                break;
            }
        case VALIDATE_MESSAGE_RECEIVED:
            {
                state = { ...state, busy: false, validated: true, countReceived: state.countReceived + 1, values: action.values, busyCount: state.busyCount - 1 };
                break;
            }
        case VALIDATE_MESSAGE_FAILED:
            {
                state = { ...state, busy: false, validated: false, countRequested: state.countRequested - 1, values: null, busyCount: state.busyCount - 1 };
                break;
            }
        case CANCEL_MESSAGE:
            {
                state = { ...state, validated: false };
                break;
            }
        case "RESET":
            {
                state = initialState;
                break;
            }
    }

    window.state = state;

    return state;
};

