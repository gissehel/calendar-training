import React from 'react';
import { storiesOf } from '@storybook/react';
import NextButton from '../client/views/components/nextButton';
import { action } from '@storybook/addon-actions';
import { getReduxMockDecorator } from './utils/reduxMock';
// import '../client/views/main.css';

storiesOf('Next button', module)
    .add('base', () => {
        return <NextButton
            onExit={action('onExit')}
        />;
    })
