import { NEXT_QUESTION, PROVIDE_ANSWER, RESET_QUESTIONS, START_QUESTIONS, CHANGE_LANG } from "../constants/question";
import { } from "babel-polyfill";

/**
 * @typedef {import("redux").Action<string> & {answer:number}} AnswerAction
 */
/**
 * @typedef {import("redux").Action<string> & {lang:string}} ChangeLangAction
 */

/**
 * @param {number} day
 * @return {AnswerAction}
 */
export const answer = (day) => ({ type: PROVIDE_ANSWER, answer: day });
/**
 * @returns {import("redux").Action<string>}
 */
export const nextQuestion = () => ({ type: NEXT_QUESTION });
/**
 * @returns {import("redux").Action<string>}
 */
export const start = () => ({ type: START_QUESTIONS });
/**
 * @returns {import("redux").Action<string>}
 */
export const reset = () => ({ type: RESET_QUESTIONS });
/**
 * @param {string} lang 
 * @returns {ChangeLangAction}
 */
export const changeLang = (lang) => ({ type: CHANGE_LANG, lang });
