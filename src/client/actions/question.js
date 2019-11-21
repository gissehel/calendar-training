import { NEXT_QUESTION, PROVIDE_ANSWER, RESET_QUESTIONS, START_QUESTIONS } from "../constants/question";
import { } from "babel-polyfill";

export const answer = (day) => ({ type: PROVIDE_ANSWER, answer: day });
export const nextQuestion = () => ({ type: NEXT_QUESTION });
export const start = () => ({ type: START_QUESTIONS });
export const reset = () => ({ type: RESET_QUESTIONS });
