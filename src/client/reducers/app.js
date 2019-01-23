import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import debug from './debug';
import messageBox from './messageBox';
import todo from './todo';

export default (history) => combineReducers({
    router: connectRouter(history),
    debug,
    messageBox,
    todo,
});

