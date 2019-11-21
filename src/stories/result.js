import React from 'react';
import { storiesOf } from '@storybook/react';
import Result from '../client/views/components/result';
import { action } from '@storybook/addon-actions';
// import '../client/views/main.css';

storiesOf('Result', module)
  .add('base', () => {
    return <Result
        rightAnswersCount={4}
        wrongAnswersCount={6}
        averageTime={5.23}
        averageTimeRight={6.12}
        averageTimeWrong={4.25}
        onExit={action('onExit')}
     />;
  })


  