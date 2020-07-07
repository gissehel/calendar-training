import React from 'react';
import { Helmet } from 'react-helmet';

import Question from "../containers/question";
import QuizzMain from "../containers/quizzmain";
import Result from "../containers/result";
import NextButton from "../containers/nextButton";

import './mainPage.css'

const MainPage = ({ is_start, is_question, is_answer, is_result }) => {
    return <div className='mainPage'>
        <Helmet>
            <title>Calendar training</title>
        </Helmet>
        {
            is_start ? <QuizzMain /> : null
        }
        {
            (is_question || is_answer) ? <Question /> : null
        }
        {
            is_answer ? <NextButton /> : null
        }
        {
            is_result ? <Result /> : null
        }
    </div>
};

export default MainPage;
