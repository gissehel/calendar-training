import React from 'react';
import { storiesOf } from '@storybook/react';
import QuizzMain from '../client/views/components/quizzmain';
import { action } from '@storybook/addon-actions';

storiesOf('QuizzMain', module)
  .add('base', () => {
    return <QuizzMain
        onStart={action('onStart')}
     />;
  })
