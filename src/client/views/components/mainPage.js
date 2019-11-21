import React from 'react';

import Question from "../containers/question";
import QuizzMain from "../containers/quizzmain";
import Result from "../containers/result";
import hot from './utils/hot';

const MainPage = ({ is_start, is_question, is_answer, is_result }) => {
    // console.log({ is_start, is_question, is_answer, is_result });
    return <div className='mainPage'>
        {
            is_start ? <QuizzMain /> : null
        }
        {
            (is_question || is_answer) ? <Question /> : null
        }
        {
            is_result ? <Result /> : null
        }
    </div>
};

export default hot(module, MainPage);
