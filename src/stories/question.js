import React from 'react';
import { storiesOf } from '@storybook/react';
import Question from '../client/views/components/question';
import { action } from '@storybook/addon-actions';
import { getReduxMockDecorator } from './utils/reduxMock';
// import '../client/views/main.css';

const onAnswer = (day) => action(`onAnswer-${day}`)();

storiesOf('Question', module)
  .add('base', () => {
    return <Question
        title='7 novembre 1939'
        onAnswer={onAnswer}
        onCancel={action('onCancel')}
        onExit={action('onExit')}
     />;
  })
  .add('+ right answer', () => {
    return <Question
        title='7 novembre 1939'
        selectedAnswer='2'
        rightAnswer='2'
        onAnswer={onAnswer}
        onCancel={action('onCancel')}
        onExit={action('onExit')}
     />;
  })
  .add('+ wrong answer', () => {
    return <Question
        title='7 novembre 1939'
        selectedAnswer='3'
        rightAnswer='2'
        onAnswer={onAnswer}
        onCancel={action('onCancel')}
        onExit={action('onExit')}
     />;
  })


  