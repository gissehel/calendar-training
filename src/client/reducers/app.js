import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import debug from './debug';
import question from './question';

export default (history) => combineReducers({
    router: connectRouter(history),
    debug,
    question,
});

