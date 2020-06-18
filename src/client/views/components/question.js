import React from 'react';

import { Message, Button } from 'semantic-ui-react';
import hot from './utils/hot';
import classNames from 'classnames'

import './question.css';

const Question = ({ title, selectedAnswer, rightAnswer, onAnswer }) => {
    let hasAnswer = false;
    let isRightAnswer = false;
    if (selectedAnswer !== null && selectedAnswer !== undefined) {
        hasAnswer = true;
        if (rightAnswer === selectedAnswer) {
            isRightAnswer = true;
        }
    }
    // console.log({ selectedAnswer, rightAnswer, hasAnswer, isRightAnswer })
    const names = {}
    const days = [[1, 'Lu'], [2, 'Ma'], [3, 'Me'], [4, 'Je'], [5, 'Ve'], [6, 'Sa'], [0, 'Di']];
    days.forEach(([day, name]) => {
        names[day] = classNames({
            'green': hasAnswer && isRightAnswer && `${selectedAnswer}` === `${day}`,
            'red': hasAnswer && (!isRightAnswer) && `${selectedAnswer}` === `${day}`,
            'primary': hasAnswer && (!isRightAnswer) && `${rightAnswer}` === `${day}`,
        });
    });
    const onValueSelected = (day) => hasAnswer ? null : () => onAnswer(day);
    const disabled = hasAnswer;

    return <Message className='messagebox'>
        <Message.Header className='title'>{title}</Message.Header>
        <Message.Content>
            <div className='buttons'>
                {
                    days.map(([day, name]) => <Button key={day} className={names[day]} onClick={onValueSelected(day)} disabled={disabled}>{name}</Button>)
                }
            </div>
        </Message.Content>
    </Message>
};

export default hot(module, Question);
