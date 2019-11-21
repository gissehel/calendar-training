import { START_QUESTIONS, PROVIDE_ANSWER, NEXT_QUESTION, RESET_QUESTIONS } from "../constants/question";
import { findNewDay } from "../service/day";

const initalState = {
    count: 0,
    total: 5,
    count_right: 0,
    count_wrong: 0,
    times_right: [],
    times_wrong: [],
    current_question: null,
    current_answer: null,
    is_start: true,
    is_question: false,
    is_answer: false,
    is_result: false,
    question_start: null,
};

export default (state, action) => {
    state = state || initalState;

    switch (action.type) {
        case RESET_QUESTIONS:
            {
                state = initalState;
                break;
            }
        case START_QUESTIONS:
            {
                let count = 1;
                let current_question = findNewDay();
                let question_start = new Date();
                state = { ...state, count, current_question, question_start, is_start: false, is_question: true, is_answer: false };
                break;
            }
        case NEXT_QUESTION:
            {
                let { count, total } = state;
                let is_answer = false;
                let is_question = true;
                let is_result = false;
                let current_answer = null;
                let current_question = null;
                let question_start = new Date();
                if (count >= total) {
                    is_question = false;
                    is_result = true;
                } else {
                    count++;
                    current_question = findNewDay();
                }
                state = { ...state, count, current_question, question_start, current_answer, is_answer, is_question, is_result };
                break;
            }
        case PROVIDE_ANSWER:
            {
                let { count_right, count_wrong, times_right, times_wrong, question_start, current_question } = state;
                let { answer } = action;
                let current_answer = answer;
                let time = (new Date()-question_start)/1000;
                if (answer === current_question.expectedResult) {
                    count_right++;
                    times_right = [...times_right, time];
                } else {
                    count_wrong++;
                    times_wrong = [...times_wrong, time];
                }
                state = { ...state, count_right, count_wrong, times_right, times_wrong, current_answer, is_answer: true, question_start: null };
                break;
            }
    }

    return state;
}
