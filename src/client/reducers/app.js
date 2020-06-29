import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import debug from './debug';
import question from './question';

/**
 * @typedef {Object} State
 * @property {import("./question").QuestionState} question
 * @property {import("connected-react-router").RouterState<{}>} route
 */

export default (history) => combineReducers({
    router: connectRouter(history),
    debug,
    question,
});

