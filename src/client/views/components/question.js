import React from 'react';

import { Message, Button } from 'semantic-ui-react';
import hot from './utils/hot';
import classNames from 'classnames'

import './question.css';

const Question = ({ title, selectedAnswer, rightAnswer, onAnswer, onCancel, onExit }) => {
    let hasAnswer = false;
    let isRightAnswer = false;
    if (selectedAnswer !== null) {
        hasAnswer = true;
        if (rightAnswer === selectedAnswer) {
            isRightAnswer = true;
        }
    }
    console.log({selectedAnswer, rightAnswer, hasAnswer, isRightAnswer})
    const names = {}
    const days = [0,1,2,3,4,5,6];
    days.forEach((day) => {
        names[day] = classNames({
            'green': hasAnswer && isRightAnswer && `${selectedAnswer}` === `${day}`,
            'red': hasAnswer && (!isRightAnswer) && `${selectedAnswer}` === `${day}`,
            'primary': hasAnswer && (!isRightAnswer) && `${rightAnswer}` === `${day}`,
        });
    });
    const onValueSelected = (day) => hasAnswer ? ()=>onExit() : ()=>onAnswer(day);
    return <Message className='messagebox'>
        <Message.Header className='title'>{title}</Message.Header>
        <Message.Content>
            <div className='buttons'>
                <Button className={names[1]} onClick={onValueSelected(1)}>Lu</Button>
                <Button className={names[2]} onClick={onValueSelected(2)}>Ma</Button>
                <Button className={names[3]} onClick={onValueSelected(3)}>Me</Button>
                <Button className={names[4]} onClick={onValueSelected(4)}>Je</Button>
                <Button className={names[5]} onClick={onValueSelected(5)}>Ve</Button>
                <Button className={names[6]} onClick={onValueSelected(6)}>Sa</Button>
                <Button className={names[0]} onClick={onValueSelected(0)}>Di</Button>
            </div>
        </Message.Content>
    </Message>
};

export default hot(module, Question);
