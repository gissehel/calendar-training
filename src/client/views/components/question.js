import React from 'react';

import { Message, Button } from 'semantic-ui-react';
import classNames from 'classnames';
import { bindKey, unbindKey } from './utils/KeyboardManager';

import './question.css';

/**
 * @typedef {Object} DayInfo
 * @property {number} index The index of the button
 * @property {string[]} keys The keys to bind
 */

 /**
  * @type {DayInfo[]}
  */
const dayInfos = [
    { index: 1, keys: ['1'] },
    { index: 2, keys: ['2'] },
    { index: 3, keys: ['3'] },
    { index: 4, keys: ['4'] },
    { index: 5, keys: ['5'] },
    { index: 6, keys: ['6'] },
    { index: 0, keys: ['0', '7'] },
]

/**
 * 
 * @param {string} lang The langugage to use
 * @returns {Object<number, string>}
 */
const getWeekDaysForLand = (lang) => {
    const weekdays = {}
    const formatter = new Intl.DateTimeFormat(lang, { 'weekday': 'short' });
    const basedate = 1 * new Date('1905-01-01')
    dayInfos.map(({ index }) => {
        weekdays[index] = formatter.format(new Date(basedate + index * 24 * 60 * 60 * 1000))
    })
    return weekdays;
}

class Question extends React.Component {
    componentDidMount() {
        dayInfos.forEach(({ index, keys }) => {
            keys.forEach((key) => {
                bindKey(() => this.onAnswer(index), key);
            })
        })
    }

    componentWillUnmount() {
        dayInfos.forEach(({ keys }) => {
            keys.forEach((key) => {
                unbindKey(key);
            })
        })
    }

    onAnswer(num) {
        let { selectedAnswer, rightAnswer, onAnswer } = this.props;
        if (!selectedAnswer && !rightAnswer) {
            onAnswer(num);
        }
    }

    render() {
        let { title, selectedAnswer, rightAnswer, onAnswer, lang } = this.props;
        let hasAnswer = false;
        let isRightAnswer = false;

        if (!lang) {
            lang = 'en';
        }

        if (selectedAnswer !== null && selectedAnswer !== undefined) {
            hasAnswer = true;
            if (rightAnswer === selectedAnswer) {
                isRightAnswer = true;
            }
        }

        const names = {}
        dayInfos.forEach(({ index }) => {
            names[index] = classNames({
                'green': hasAnswer && isRightAnswer && `${selectedAnswer}` === `${index}`,
                'red': hasAnswer && (!isRightAnswer) && `${selectedAnswer}` === `${index}`,
                'primary': hasAnswer && (!isRightAnswer) && `${rightAnswer}` === `${index}`,
            });
        });
        const onValueSelected = (day) => hasAnswer ? null : () => onAnswer(day);
        const disabled = hasAnswer;
        const weekdays = getWeekDaysForLand(lang)

        return <Message className='messagebox'>
            <Message.Header className='title'>{title}</Message.Header>
            <Message.Content>
                <div className='buttons'>
                    {
                        dayInfos.map(({ index }) =>
                            <Button key={index} className={names[index]} onClick={onValueSelected(index)} disabled={disabled}>
                                {weekdays[index]}
                            </Button>
                        )
                    }
                </div>
            </Message.Content>
        </Message>
    }
}

export default Question;
