import { CANCEL_MESSAGE, VALIDATE_MESSAGE_REQUESTED, VALIDATE_MESSAGE_RECEIVED, VALIDATE_MESSAGE_FAILED } from "../constants/messageBox";

const initialState = { countRequested: 0, countReceived:0, validated: false, busyCount: 0 };

export default (state, action) => {
    state = state || initialState;
    
    switch (action.type) {
        case VALIDATE_MESSAGE_REQUESTED:
            return { ...state, busy: true, countRequested: state.countRequested+1, busyCount: state.busyCount+1 };
        case VALIDATE_MESSAGE_RECEIVED:
            return { ...state, busy: false, validated: true, countReceived: state.countReceived+1, values: action.values, busyCount: state.busyCount-1 };
        case VALIDATE_MESSAGE_FAILED:
            return { ...state, busy: false, validated: false, countRequested: state.countRequested-1, values: null, busyCount: state.busyCount-1 };
        case CANCEL_MESSAGE:
            return { ...state, validated: false };
        case "RESET":
            return initialState;
    }
    
    window.state = state;
    
    return state;
};

