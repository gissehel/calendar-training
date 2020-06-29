import { START_QUESTIONS, PROVIDE_ANSWER, NEXT_QUESTION, RESET_QUESTIONS, CHANGE_LANG } from "../constants/question";
import { findNewDay } from "../service/day";

const getLang = () => navigator ? navigator.language : 'en';

/**
 * @typedef {Object} QuestionState
 * @property {number} count The index of the current game to play
 * @property {number} total The total games to play
 * @property {number} count_right The number of right answers
 * @property {number} count_wrong The number of wrong answers
 * @property {number[]} times_right List of times for right answers
 * @property {number[]} times_wrong List of times for wront answers
 * @property {import("../service/day").DateDescription} current_question The DateDescription for the current question
 * @property {number} current_answer The index of the current answer
 * @property {number} time The time used to answer (null when not answered)
 * @property {boolean} is_start true if the current state is "start"
 * @property {boolean} is_question true if the current state is "question"
 * @property {boolean} is_answer true if the current state is "answer"
 * @property {boolean} is_result true if the current state is "result"
 * @property {number} question_start The time when question started
 * @property {string} lang the lang of the local
 */

/**
 * @type {QuestionState}
 */
const initalState = {
    count: 0,
    total: 5,
    count_right: 0,
    count_wrong: 0,
    times_right: [],
    times_wrong: [],
    current_question: null,
    current_answer: null,
    time: null,
    is_start: true,
    is_question: false,
    is_answer: false,
    is_result: false,
    question_start: null,
    lang: getLang(),
};



/**
 * @type {(state: QuestionState, action: import("redux").AnyAction) => QuestionState}
 */
export default (state, action) => {
    state = state || initalState;

    switch (action.type) {
        case RESET_QUESTIONS:
            {
                state = initalState;
                break;
            }
        case CHANGE_LANG:
            {
                const { lang } = action;
                state = { ...state, lang }
                break;
            }
        case START_QUESTIONS:
            {
                let count = 1;
                let current_question = findNewDay(state.lang);
                let question_start = new Date().getTime();
                state = { ...state, count, current_question, question_start, is_start: false, is_question: true, is_answer: false };
                break;
            }
        case NEXT_QUESTION:
            {
                let { count, total } = state;
                let is_answer = false;
                let is_question = true;
                let is_result = false;
                let time = null;
                let current_answer = null;
                /** @type {import("../service/day").DateDescription} */
                let current_question = null;
                let question_start = new Date().getTime();
                if (count >= total) {
                    is_question = false;
                    is_result = true;
                } else {
                    count++;
                    current_question = findNewDay(state.lang);
                }
                state = { ...state, count, current_question, question_start, current_answer, time, is_answer, is_question, is_result };
                break;
            }
        case PROVIDE_ANSWER:
            {
                let { count_right, count_wrong, times_right, times_wrong, question_start, current_question } = state;
                // @ts-ignore
                let { answer } = action;
                let current_answer = answer;
                let time = (new Date().getTime() - question_start) / 1000;
                if (answer === current_question.expectedResult) {
                    count_right++;
                    times_right = [...times_right, time];
                } else {
                    count_wrong++;
                    times_wrong = [...times_wrong, time];
                }
                state = { ...state, count_right, count_wrong, times_right, times_wrong, current_answer, time, is_answer: true, question_start: null };
                break;
            }
    }

    return state;
}
